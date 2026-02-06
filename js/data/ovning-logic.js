// ============================================
// ÖVNINGSLOGIK - ALLA FRÅGETYPER
// Version 2.0 - Med förbättrad drag & drop + touch-support
// ============================================

// Global state
let currentChapterId = null;
let currentSubchapterId = null;
let currentExercises = [];
let currentQuestionIndex = 0;
let answers = [];
let correctAnswers = 0;
let feedbackTimerInterval = null;

// State för matching-frågor
let matchingState = {
    selected: null,
    pairs: []
};

// State för ordering-frågor
let orderingState = {
    currentOrder: []
};

// State för drag & drop
let draggedItem = null;
let selectedForSwap = null;
let touchStartY = 0;
let touchStartX = 0;
let touchCurrentItem = null;
let touchClone = null;
let isTouchDragging = false;
let longPressTimer = null;
let touchStartTime = 0;
let initialTouchPos = { x: 0, y: 0 };

// ============================================
// INITIERING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadChapterOptions();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('chapterSelect').addEventListener('change', function() {
        const chapterId = parseInt(this.value);
        if (chapterId) {
            selectChapter(chapterId);
        } else {
            document.getElementById('stepSubchapter').style.display = 'none';
        }
    });
}

// ============================================
// STEG 1: LADDA KAPITEL
// ============================================
function loadChapterOptions() {
    const select = document.getElementById('chapterSelect');
    
    certChapters.forEach(chapter => {
        if (chapter.subchapters && chapter.subchapters.length > 0) {
            const hasExercises = chapter.subchapters.some(sub => 
                sub.exercises && sub.exercises.length > 0
            );
            
            if (hasExercises) {
                const option = document.createElement('option');
                option.value = chapter.id;
                option.textContent = `${chapter.icon} Kapitel ${chapter.number}: ${chapter.title}`;
                select.appendChild(option);
            }
        }
    });
}

// ============================================
// STEG 2: VISA DELKAPITEL
// ============================================
function selectChapter(chapterId) {
    currentChapterId = chapterId;
    const chapter = certChapters.find(ch => ch.id === chapterId);
    
    if (!chapter) return;
    
    const grid = document.getElementById('subchapterGrid');
    grid.innerHTML = '';
    
    chapter.subchapters.forEach(subchapter => {
        const hasExercises = subchapter.exercises && subchapter.exercises.length > 0;
        const progress = ProgressManager.getSubchapterProgress(chapterId, subchapter.id);
        
        const card = document.createElement('div');
        card.className = 'subchapter-card';
        
        if (!hasExercises) {
            card.classList.add('disabled');
        } else if (progress.completed) {
            card.classList.add('completed');
        }
        
        let statusBadge = '';
        if (!hasExercises) {
            statusBadge = '<span class="progress-badge" style="background: #94a3b8;">Kommer snart</span>';
        } else if (progress.completed) {
            statusBadge = `<span class="progress-badge completed">✓ Klarat ${progress.bestScore}%</span>`;
        } else if (progress.attempts > 0) {
            statusBadge = `<span class="progress-badge in-progress">${progress.bestScore}%</span>`;
        }
        
        card.innerHTML = `
            <div class="subchapter-title">
                ${subchapter.id} - ${subchapter.title}
            </div>
            <div class="subchapter-meta">
                <div>⏱️ ${subchapter.estimatedTime} min</div>
                ${hasExercises ? `<div>📝 ${subchapter.exercises.length} övningar</div>` : ''}
                ${statusBadge}
            </div>
        `;
        
        if (hasExercises) {
            card.onclick = () => startSubchapter(subchapter.id);
        }
        
        grid.appendChild(card);
    });
    
    document.getElementById('stepSubchapter').style.display = 'block';
    document.getElementById('stepSubchapter').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// STEG 3: STARTA ÖVNING
// ============================================
function startSubchapter(subchapterId) {
    currentSubchapterId = subchapterId;
    const chapter = certChapters.find(ch => ch.id === currentChapterId);
    const subchapter = chapter.subchapters.find(sub => sub.id === subchapterId);
    
    // Använd ALLA övningar (inte bara multiple-choice)
    currentExercises = [...subchapter.exercises];
    
    if (currentExercises.length === 0) {
        alert('Detta delkapitel har inga övningar tillgängliga än.');
        return;
    }
    
    currentQuestionIndex = 0;
    answers = [];
    correctAnswers = 0;
    
    document.getElementById('exerciseTitle').textContent = 
        `${subchapter.id} - ${subchapter.title}`;
    
    // Visa övningsvyn
    document.getElementById('stepChapter').style.display = 'none';
    document.getElementById('stepSubchapter').style.display = 'none';
    document.getElementById('stepExercise').style.display = 'block';
    
    renderProgressDots();
    showQuestion();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// VISA FRÅGA (ROUTER)
// ============================================
function showQuestion() {
    // Rensa tidigare timer om den finns
    if (feedbackTimerInterval) {
        clearInterval(feedbackTimerInterval);
        feedbackTimerInterval = null;
    }
    
    if (currentQuestionIndex >= currentExercises.length) {
        showResults();
        return;
    }
    
    const question = currentExercises[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    // Uppdatera progress
    document.getElementById('progressText').textContent = 
        `${currentQuestionIndex + 1}/${currentExercises.length}`;
    
    // Rendera rätt frågetyp
    const type = question.type || 'multiple-choice';
    
    switch(type) {
        case 'multiple-choice':
            renderMultipleChoice(question, container);
            break;
        case 'true-false':
            renderTrueFalse(question, container);
            break;
        case 'fill-blank':
            renderFillBlank(question, container);
            break;
        case 'calculation':
            renderCalculation(question, container);
            break;
        case 'matching':
            renderMatching(question, container);
            break;
        case 'ordering':
            renderOrdering(question, container);
            break;
        default:
            renderMultipleChoice(question, container);
    }
}

// ============================================
// MULTIPLE CHOICE
// ============================================
function renderMultipleChoice(question, container) {
    if (!question.options || question.options.length === 0) {
        console.error('Multiple-choice fråga saknar alternativ:', question);
        currentQuestionIndex++;
        showQuestion();
        return;
    }
    
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="options-list" id="optionsList">
    `;
    
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    question.options.forEach((option, index) => {
        html += `
            <button class="option-button" onclick="selectMultipleChoice(${index})" id="option-${index}">
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${option}</span>
            </button>
        `;
    });
    
    html += `
            </div>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

window.selectMultipleChoice = function(selectedIndex) {
    const question = currentExercises[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås alla knappar
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, idx) => {
        btn.classList.add('disabled');
        btn.onclick = null;
        
        if (idx === selectedIndex) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (idx === question.correct && !isCorrect) {
            btn.classList.add('correct');
        }
    });
};

// ============================================
// TRUE/FALSE
// ============================================
function renderTrueFalse(question, container) {
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="true-false-container">
                <button class="tf-button" onclick="selectTrueFalse(true)">
                    ✓ Sant
                </button>
                <button class="tf-button" onclick="selectTrueFalse(false)">
                    ✗ Falskt
                </button>
            </div>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

window.selectTrueFalse = function(selectedValue) {
    const question = currentExercises[currentQuestionIndex];
    const isCorrect = selectedValue === question.correct;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Markera knappar
    const buttons = document.querySelectorAll('.tf-button');
    buttons.forEach(btn => {
        btn.classList.add('disabled');
        btn.onclick = null;
        
        const btnValue = btn.textContent.includes('Sant');
        if (btnValue === selectedValue) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (btnValue === question.correct && !isCorrect) {
            btn.classList.add('correct');
        }
    });
};

// ============================================
// FILL BLANK
// ============================================
function renderFillBlank(question, container) {
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <input type="text" 
                   class="fill-blank-input" 
                   id="fillBlankInput" 
                   placeholder="Skriv ditt svar här...">
            <button class="submit-button" onclick="submitFillBlank()">Kontrollera svar</button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Enter-tangent för att skicka
    document.getElementById('fillBlankInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            window.submitFillBlank();
        }
    });
}

window.submitFillBlank = function() {
    const question = currentExercises[currentQuestionIndex];
    const input = document.getElementById('fillBlankInput');
    const userAnswer = input.value.trim().toLowerCase();
    
    // Kolla både correctAnswers array
    const correctAnswers = question.correctAnswers ? question.correctAnswers.map(a => a.toLowerCase()) : [question.answer.toLowerCase()];
    
    const isCorrect = correctAnswers.includes(userAnswer);
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås input
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    document.querySelector('.submit-button').disabled = true;
};

// ============================================
// CALCULATION
// ============================================
function renderCalculation(question, container) {
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="calculation-input-group">
                <input type="number" 
                       class="calculation-input" 
                       id="calculationInput" 
                       placeholder="Ange ditt svar"
                       step="any">
                <span class="calculation-unit">${question.unit || ''}</span>
            </div>
            <button class="submit-button" onclick="submitCalculation()">Kontrollera svar</button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    document.getElementById('calculationInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            window.submitCalculation();
        }
    });
}

window.submitCalculation = function() {
    const question = currentExercises[currentQuestionIndex];
    const input = document.getElementById('calculationInput');
    const userAnswer = parseFloat(input.value);
    
    if (isNaN(userAnswer)) {
        alert('Vänligen ange ett numeriskt svar');
        return;
    }
    
    // Kolla med tolerans om angiven
    const tolerance = question.tolerance || 0;
    const isCorrect = Math.abs(userAnswer - question.answer) <= tolerance;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås input
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'incorrect');
    document.querySelector('.submit-button').disabled = true;
};

// ============================================
// MATCHING
// ============================================
function renderMatching(question, container) {
    matchingState = {
        selected: null,
        pairs: []
    };
    
    // Blanda höger sida
    const rightItems = [...question.pairs.map(p => p.right)].sort(() => Math.random() - 0.5);
    
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <div class="matching-container">
                <div class="matching-left" id="matchingLeft">
    `;
    
    question.pairs.forEach((pair, index) => {
        html += `
            <div class="matching-item" onclick="selectMatchingLeft(${index})" data-index="${index}">
                ${pair.left}
            </div>
        `;
    });
    
    html += `
                </div>
                <div class="matching-lines">
                    <div style="color: #94a3b8;">↔</div>
                    <div style="color: #94a3b8;">↔</div>
                    <div style="color: #94a3b8;">↔</div>
                    <div style="color: #94a3b8;">↔</div>
                </div>
                <div class="matching-right" id="matchingRight">
    `;
    
    rightItems.forEach((right, index) => {
        html += `
            <div class="matching-item" onclick="selectMatchingRight('${right}')" data-value="${right}">
                ${right}
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
            <button class="submit-button" style="margin-top: 1rem;" onclick="submitMatching()" id="submitMatching" disabled>
                Kontrollera svar
            </button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
}

window.selectMatchingLeft = function(index) {
    const item = document.querySelector(`.matching-left .matching-item[data-index="${index}"]`);
    
    if (item.classList.contains('matched')) return;
    
    // Avmarkera tidigare valt
    document.querySelectorAll('.matching-left .matching-item').forEach(el => {
        el.classList.remove('selected');
    });
    
    item.classList.add('selected');
    matchingState.selected = index;
};

window.selectMatchingRight = function(value) {
    if (matchingState.selected === null) {
        alert('Välj först ett alternativ från vänster sida');
        return;
    }
    
    const item = document.querySelector(`.matching-right .matching-item[data-value="${value}"]`);
    
    if (item.classList.contains('matched')) return;
    
    // Spara par
    matchingState.pairs.push({
        left: matchingState.selected,
        right: value
    });
    
    // Markera som matchade
    const leftItem = document.querySelector(`.matching-left .matching-item[data-index="${matchingState.selected}"]`);
    leftItem.classList.add('matched');
    leftItem.classList.remove('selected');
    item.classList.add('matched');
    
    matchingState.selected = null;
    
    // Aktivera submit-knapp om alla är matchade
    const question = currentExercises[currentQuestionIndex];
    if (matchingState.pairs.length === question.pairs.length) {
        document.getElementById('submitMatching').disabled = false;
    }
};

window.submitMatching = function() {
    const question = currentExercises[currentQuestionIndex];
    
    // Räkna rätt matchningar
    let correct = 0;
    matchingState.pairs.forEach(pair => {
        const expectedRight = question.pairs[pair.left].right;
        if (pair.right === expectedRight) {
            correct++;
        }
    });
    
    const isCorrect = correct === question.pairs.length;
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Lås allt
    document.querySelectorAll('.matching-item').forEach(item => {
        item.classList.add('disabled');
        item.onclick = null;
    });
    document.getElementById('submitMatching').disabled = true;
};

// ============================================
// ORDERING - MED FÖRBÄTTRAD DRAG & DROP + TOUCH
// ============================================
function renderOrdering(question, container) {
    // Blanda items
    orderingState.currentOrder = question.items.map((item, index) => ({
        text: item,
        originalIndex: index
    })).sort(() => Math.random() - 0.5);
    
    // Detektera om det är en touch-enhet
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const helpText = isTouchDevice 
        ? '👆 Tryck på ett objekt och sedan på ett annat för att byta plats. Eller håll in för att dra.'
        : '🖱️ Dra och släpp för att ordna objekten i rätt ordning.';
    
    let html = `
        <div class="question-card">
            <span class="question-number">Fråga ${currentQuestionIndex + 1}</span>
            <div class="question-text">${question.question}</div>
            ${question.hint ? `<div class="question-hint">💡 ${question.hint}</div>` : ''}
            <p class="ordering-help">${helpText}</p>
            <div class="ordering-container" id="orderingContainer">
    `;
    
    orderingState.currentOrder.forEach((item, index) => {
        html += `
            <div class="ordering-item" draggable="true" data-index="${index}">
                <span class="order-number">${index + 1}</span>
                <span class="item-text">${item.text}</span>
                <span class="drag-handle">⋮⋮</span>
            </div>
        `;
    });
    
    html += `
            </div>
            <button class="submit-button" style="margin-top: 1rem;" onclick="submitOrdering()">
                Kontrollera svar
            </button>
            <div id="feedbackContainer"></div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Setup förbättrad drag and drop med touch-support
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const container = document.getElementById('orderingContainer');
    if (!container) return;
    
    const items = container.querySelectorAll('.ordering-item');
    
    items.forEach(item => {
        // Sätt draggable för desktop
        item.setAttribute('draggable', 'true');
        
        // Desktop drag events
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        
        // Touch events för mobil
        item.addEventListener('touchstart', handleTouchStart, { passive: false });
        item.addEventListener('touchmove', handleTouchMove, { passive: false });
        item.addEventListener('touchend', handleTouchEnd);
        item.addEventListener('touchcancel', handleTouchCancel);
        
        // Click/tap för swap
        item.addEventListener('click', handleTapToSwap);
    });
    
    // Dragover och drop på CONTAINER nivå
    container.addEventListener('dragover', handleContainerDragOver);
    container.addEventListener('drop', handleContainerDrop);
}

// === DESKTOP DRAG HANDLERS ===

function handleDragStart(e) {
    // Förhindra drag om vi är på touch-enhet och redan hanterar touch
    if (isTouchDragging) {
        e.preventDefault();
        return;
    }
    
    draggedItem = this;
    this.classList.add('dragging');
    
    // Viktigt: Sätt drag data
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    
    // Gör elementet lite transparent efter en kort fördröjning
    setTimeout(() => {
        if (draggedItem) {
            draggedItem.style.opacity = '0.4';
        }
    }, 0);
}

function handleContainerDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    if (!draggedItem) return;
    
    const container = this;
    const afterElement = getDragAfterElement(container, e.clientY);
    
    if (afterElement == null) {
        container.appendChild(draggedItem);
    } else if (afterElement !== draggedItem) {
        container.insertBefore(draggedItem, afterElement);
    }
    updateOrderNumbers(container);
}

function handleContainerDrop(e) {
    e.preventDefault();
    if (draggedItem) {
        updateOrderNumbers(this);
    }
}

function handleDragEnd(e) {
    if (this.classList.contains('dragging')) {
        this.classList.remove('dragging');
        this.style.opacity = '1';
    }
    
    if (draggedItem) {
        draggedItem.style.opacity = '1';
        draggedItem.classList.remove('dragging');
        const container = draggedItem.parentNode;
        if (container) {
            updateOrderNumbers(container);
            updateOrderingState();
        }
    }
    
    draggedItem = null;
}

// === TOUCH HANDLERS (MOBIL) ===

function handleTouchStart(e) {
    // Spara startposition och tid
    const touch = e.touches[0];
    touchStartY = touch.clientY;
    touchStartX = touch.clientX;
    initialTouchPos = { x: touch.clientX, y: touch.clientY };
    touchStartTime = Date.now();
    touchCurrentItem = this;
    
    // Lägg till visuell feedback direkt
    this.classList.add('touch-active');
    
    // Starta long-press timer (250ms för att starta drag)
    longPressTimer = setTimeout(() => {
        if (touchCurrentItem === this) {
            startTouchDrag(this, touch);
        }
    }, 250);
}

function startTouchDrag(item, touch) {
    isTouchDragging = true;
    item.classList.remove('touch-active');
    item.classList.add('dragging');
    
    // Haptic feedback om tillgängligt
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
    
    // Skapa ghost element som följer fingret
    touchClone = item.cloneNode(true);
    touchClone.classList.add('drag-ghost');
    touchClone.classList.remove('dragging', 'touch-active');
    touchClone.style.width = item.offsetWidth + 'px';
    touchClone.style.position = 'fixed';
    touchClone.style.zIndex = '10000';
    touchClone.style.pointerEvents = 'none';
    document.body.appendChild(touchClone);
    updateGhostPosition(touch.clientY, touch.clientX);
}

function handleTouchMove(e) {
    if (!touchCurrentItem) return;
    
    const touch = e.touches[0];
    const deltaY = Math.abs(touch.clientY - initialTouchPos.y);
    const deltaX = Math.abs(touch.clientX - initialTouchPos.x);
    
    // Om användaren rör sig mer än 15px innan long-press aktiveras, avbryt drag-försöket
    if (!isTouchDragging && (deltaY > 15 || deltaX > 15)) {
        clearTimeout(longPressTimer);
        if (touchCurrentItem) {
            touchCurrentItem.classList.remove('touch-active');
        }
        // Låt scroll ske normalt
        return;
    }
    
    // Om vi faktiskt drar, förhindra scroll
    if (isTouchDragging) {
        e.preventDefault();
        
        updateGhostPosition(touch.clientY, touch.clientX);
        
        const container = touchCurrentItem.parentNode;
        const afterElement = getDragAfterElement(container, touch.clientY);
        
        if (afterElement == null) {
            container.appendChild(touchCurrentItem);
        } else if (afterElement !== touchCurrentItem) {
            container.insertBefore(touchCurrentItem, afterElement);
        }
        updateOrderNumbers(container);
    }
}

function handleTouchEnd(e) {
    clearTimeout(longPressTimer);
    
    const wasDragging = isTouchDragging;
    
    // Städa upp ghost
    if (touchClone) {
        touchClone.remove();
        touchClone = null;
    }
    
    if (touchCurrentItem) {
        touchCurrentItem.classList.remove('dragging', 'touch-active');
        
        if (wasDragging) {
            const container = touchCurrentItem.parentNode;
            if (container) {
                updateOrderNumbers(container);
                updateOrderingState();
            }
        }
    }
    
    touchCurrentItem = null;
    isTouchDragging = false;
}

function handleTouchCancel(e) {
    handleTouchEnd(e);
}

function updateGhostPosition(y, x) {
    if (touchClone) {
        const ghostHeight = touchClone.offsetHeight || 50;
        const ghostWidth = touchClone.offsetWidth || 200;
        touchClone.style.top = (y - ghostHeight / 2) + 'px';
        touchClone.style.left = (x - ghostWidth / 2) + 'px';
    }
}

// === TAP TO SWAP ===

function handleTapToSwap(e) {
    // Ignorera om vi har dragit
    if (isTouchDragging) return;
    
    // Ignorera om det var en riktig drag på desktop
    if (draggedItem) return;
    
    const container = this.parentNode;
    
    if (selectedForSwap === null) {
        // Första valet
        selectedForSwap = this;
        this.classList.add('selected-for-swap');
    } else if (selectedForSwap === this) {
        // Klick på samma - avmarkera
        this.classList.remove('selected-for-swap');
        selectedForSwap = null;
    } else {
        // Andra valet - byt plats
        const items = Array.from(container.children);
        const idx1 = items.indexOf(selectedForSwap);
        const idx2 = items.indexOf(this);
        
        // Byt plats genom att flytta element
        if (idx1 < idx2) {
            container.insertBefore(this, selectedForSwap);
            container.insertBefore(selectedForSwap, items[idx2 + 1] || null);
        } else {
            container.insertBefore(selectedForSwap, this);
            container.insertBefore(this, items[idx1 + 1] || null);
        }
        
        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
        
        selectedForSwap.classList.remove('selected-for-swap');
        selectedForSwap = null;
        updateOrderNumbers(container);
        updateOrderingState();
    }
}

// === HELPER FUNCTIONS ===

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.ordering-item:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateOrderNumbers(container) {
    if (!container) return;
    const items = container.querySelectorAll('.ordering-item');
    items.forEach((item, i) => {
        const numEl = item.querySelector('.order-number');
        if (numEl) numEl.textContent = i + 1;
        item.dataset.pos = i;
    });
}

function updateOrderingState() {
    const container = document.getElementById('orderingContainer');
    if (!container) return;
    
    const items = container.querySelectorAll('.ordering-item');
    const newOrder = [];
    
    items.forEach((item, i) => {
        const originalIndex = parseInt(item.dataset.index);
        if (!isNaN(originalIndex) && orderingState.currentOrder[originalIndex]) {
            newOrder.push(orderingState.currentOrder[originalIndex]);
        }
    });
    
    orderingState.currentOrder = newOrder;
}

window.submitOrdering = function() {
    const question = currentExercises[currentQuestionIndex];
    
    // Kolla om ordningen är korrekt
    const isCorrect = orderingState.currentOrder.every((item, index) => {
        return item.originalIndex === question.correctOrder[index];
    });
    
    saveAnswer(isCorrect);
    showFeedback(isCorrect, question);
    
    // Markera rätt/fel
    const items = document.querySelectorAll('.ordering-item');
    items.forEach((item, index) => {
        const originalIndex = orderingState.currentOrder[index].originalIndex;
        const correctOriginalIndex = question.correctOrder[index];
        
        item.draggable = false;
        item.classList.add('disabled');
        
        // Ta bort alla event listeners
        item.onclick = null;
        item.ontouchstart = null;
        item.ontouchmove = null;
        item.ontouchend = null;
        
        if (originalIndex === correctOriginalIndex) {
            item.classList.add('correct-position');
        } else {
            item.classList.add('incorrect-position');
        }
    });
    
    document.querySelector('.submit-button').disabled = true;
};

// ============================================
// GEMENSAMMA FUNKTIONER
// ============================================
function saveAnswer(isCorrect) {
    answers[currentQuestionIndex] = {
        isCorrect: isCorrect
    };
    
    if (isCorrect) {
        correctAnswers++;
    }
    
    renderProgressDots();
}

function showFeedback(isCorrect, question) {
    const container = document.getElementById('feedbackContainer');
    const feedbackClass = isCorrect ? 'correct' : 'incorrect';
    const icon = isCorrect ? '✓' : '✗';
    const title = isCorrect ? 'Rätt!' : 'Fel svar';
    
    container.innerHTML = `
        <div class="feedback-box ${feedbackClass}">
            <div class="feedback-icon">${icon}</div>
            <div class="feedback-text">
                <strong>${title}</strong><br>
                ${question.explanation || ''}
            </div>
            <div class="feedback-actions">
                <div class="feedback-timer">
                    <div class="timer-bar" id="timerBar"></div>
                    <span class="timer-text" id="timerText">Nästa fråga om 10s</span>
                </div>
                <button class="next-button" onclick="nextQuestion()">
                    Nästa fråga →
                </button>
            </div>
        </div>
    `;
    
    // Starta timer-animation (10 sekunder)
    startFeedbackTimer(10);
}

function startFeedbackTimer(seconds) {
    const timerBar = document.getElementById('timerBar');
    const timerText = document.getElementById('timerText');
    
    if (!timerBar || !timerText) return;
    
    let remaining = seconds;
    timerText.textContent = `Nästa fråga om ${remaining}s`;
    
    // Animera timer-bar
    timerBar.style.transition = `width ${seconds}s linear`;
    timerBar.style.width = '0%';
    
    // Uppdatera text varje sekund
    feedbackTimerInterval = setInterval(() => {
        remaining--;
        if (remaining > 0) {
            timerText.textContent = `Nästa fråga om ${remaining}s`;
        } else {
            timerText.textContent = 'Laddar...';
            clearInterval(feedbackTimerInterval);
            feedbackTimerInterval = null;
            // Gå automatiskt till nästa efter 10 sekunder
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    // Rensa timer om den finns
    if (feedbackTimerInterval) {
        clearInterval(feedbackTimerInterval);
        feedbackTimerInterval = null;
    }
    
    // Rensa drag & drop state
    draggedItem = null;
    selectedForSwap = null;
    touchCurrentItem = null;
    isTouchDragging = false;
    if (touchClone) {
        touchClone.remove();
        touchClone = null;
    }
    
    currentQuestionIndex++;
    showQuestion();
}

function renderProgressDots() {
    const container = document.getElementById('progressDots');
    let html = '';
    
    for (let i = 0; i < currentExercises.length; i++) {
        let className = 'progress-dot';
        if (answers[i]) {
            className += answers[i].isCorrect ? ' correct' : ' incorrect';
        } else if (i < currentQuestionIndex) {
            className += ' answered';
        }
        html += `<div class="${className}"></div>`;
    }
    
    container.innerHTML = html;
}

// ============================================
// VISA RESULTAT
// ============================================
function showResults() {
    const total = currentExercises.length;
    const percentage = Math.round((correctAnswers / total) * 100);
    const passed = percentage >= 80;
    
    // Spara resultat
    ProgressManager.recordSubchapterResult(currentChapterId, currentSubchapterId, {
        totalQuestions: total,
        correctAnswers: correctAnswers,
        percentage: percentage
    });
    
    // Dölj övningsvyn, visa resultat
    document.getElementById('stepExercise').style.display = 'none';
    document.getElementById('stepResults').style.display = 'block';
    
    // Uppdatera värden
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('percentageValue').textContent = percentage + '%';
    document.getElementById('percentageValue').className = 'result-value ' + (passed ? 'pass' : 'fail');
    document.getElementById('statusValue').textContent = passed ? '✅ Godkänd' : '❌ Ej godkänd';
    document.getElementById('statusValue').className = 'result-value ' + (passed ? 'pass' : 'fail');
    
    // Hämta kapitel och delkapitel info
    const chapter = certChapters.find(ch => ch.id === currentChapterId);
    const subchapter = chapter.subchapters.find(sub => sub.id === currentSubchapterId);
    
    // Resultatikon och meddelande
    if (passed) {
        document.getElementById('resultsIcon').textContent = '🎉';
        document.getElementById('resultsTitle').textContent = 'Grattis!';
        document.getElementById('resultsSubtitle').textContent = `Du har klarat ${subchapter.id} - ${subchapter.title}`;
        document.getElementById('resultMessage').className = 'result-message pass';
        document.getElementById('resultMessage').innerHTML = `
            <strong>Bra jobbat!</strong><br>
            Du fick ${correctAnswers} av ${total} frågor rätt (${percentage}%) och har nu klarat detta delkapitel.
            <br><br>
            Du kan fortsätta till nästa delkapitel eller öva mer för att bli ännu säkrare.
        `;
    } else {
        document.getElementById('resultsIcon').textContent = '📚';
        document.getElementById('resultsTitle').textContent = 'Inte godkänd än';
        document.getElementById('resultsSubtitle').textContent = `${subchapter.id} - ${subchapter.title}`;
        document.getElementById('resultMessage').className = 'result-message fail';
        document.getElementById('resultMessage').innerHTML = `
            <strong>Fortsätt öva!</strong><br>
            Du fick ${correctAnswers} av ${total} frågor rätt (${percentage}%), men behöver minst 80% för att klara delkapitlet.
            <br><br>
            ${getRecommendation(percentage)}
        `;
    }
    
    // Scrolla till toppen för att se resultatet
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getRecommendation(percentage) {
    if (percentage < 50) {
        return '<strong>Rekommendation:</strong> Läs igenom teorin igen innan du gör om övningen. Ta god tid på dig och anteckna viktiga punkter.';
    } else if (percentage < 70) {
        return '<strong>Rekommendation:</strong> Du är på rätt väg! Fokusera på de områden du svarade fel på och försök igen.';
    } else {
        return '<strong>Rekommendation:</strong> Du är nästan där! Försök igen så når du säkert 80%. Du behöver bara några fler rätt.';
    }
}

// ============================================
// NAVIGERINGSFUNKTIONER
// ============================================
window.tryAgain = function() {
    startSubchapter(currentSubchapterId);
};

window.nextSubchapter = function() {
    const chapter = certChapters.find(ch => ch.id === currentChapterId);
    const currentIndex = chapter.subchapters.findIndex(sub => sub.id === currentSubchapterId);
    
    // Hitta nästa delkapitel med övningar
    let nextSubchapter = null;
    for (let i = currentIndex + 1; i < chapter.subchapters.length; i++) {
        if (chapter.subchapters[i].exercises && chapter.subchapters[i].exercises.length > 0) {
            nextSubchapter = chapter.subchapters[i];
            break;
        }
    }
    
    if (nextSubchapter) {
        startSubchapter(nextSubchapter.id);
    } else {
        alert('Grattis! Du har kommit till slutet av detta kapitel. Välj ett nytt kapitel för att fortsätta.');
        window.backToChapters();
    }
};

window.backToChapters = function() {
    document.getElementById('stepResults').style.display = 'none';
    document.getElementById('stepExercise').style.display = 'none';
    document.getElementById('stepChapter').style.display = 'block';
    document.getElementById('stepSubchapter').style.display = 'block';
    
    // Uppdatera delkapitelvyn
    if (currentChapterId) {
        selectChapter(currentChapterId);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.goBackToTheory = function() {
    const chapter = certChapters.find(ch => ch.id === currentChapterId);
    const subchapter = chapter.subchapters.find(sub => sub.id === currentSubchapterId);
    
    // Bekräfta innan användaren lämnar övningen
    const confirmed = confirm(`Vill du lämna övningen och läsa teorin för ${subchapter.title}?\n\nDin nuvarande progress sparas inte.`);
    
    if (confirmed) {
        // Bygg URL baserat på kapitel
        const chapterSlug = chapter.slug || `kapitel-${chapter.number}`;
        const theoryUrl = `../../pages/chapters/${chapterSlug}.html`;
        
        // Öppna i ny flik så användaren kan komma tillbaka enkelt
        window.open(theoryUrl, '_blank');
    }
};