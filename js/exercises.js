// js/exercises.js
// Hanterar övningar för alla kapitel (intro, pmr, morse, cert)
// Version 2.0 - Förbättrad mobilkompatibilitet

let currentExercises = [];
let userAnswers = {};

function loadExercises(exercises) {
    currentExercises = exercises;
    userAnswers = {};
    
    const container = document.getElementById('exercisesContainer');
    if (!container) {
        console.error('exercisesContainer not found');
        return;
    }
    
    if (!exercises || exercises.length === 0) {
        container.innerHTML = '<p class="no-exercises">Inga övningar tillgängliga för detta kapitel ännu.</p>';
        return;
    }
    
    container.innerHTML = exercises.map((ex, index) => renderExercise(ex, index)).join('');
    
    // Initiera drag and drop / touch
    initDragAndDrop();
}

function renderExercise(exercise, index) {
    const num = index + 1;
    const type = exercise.type || 'multiple-choice';
    
    switch(type) {
        case 'multiple-choice':
        case 'multiple':
            return renderMultipleChoice(exercise, index, num);
        case 'true-false':
            return renderTrueFalse(exercise, index, num);
        case 'fill-blank':
            return renderFillBlank(exercise, index, num);
        case 'matching':
            return renderMatching(exercise, index, num);
        case 'ordering':
            return renderOrdering(exercise, index, num);
        case 'calculation':
            return renderCalculation(exercise, index, num);
        case 'reflection':
            return renderReflection(exercise, index, num);
        case 'timeline':
            return renderTimeline(exercise, index, num);
        default:
            return renderMultipleChoice(exercise, index, num);
    }
}

function renderMultipleChoice(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const correctIndex = ex.correct;
    
    const optionsHTML = ex.options.map((opt, i) => `
        <button type="button" class="mc-option-btn" data-option="${i}"
                onclick="handleMultipleChoice('${exerciseId}', ${index}, ${i}, ${correctIndex})">
            <span class="mc-marker">${String.fromCharCode(65 + i)}</span>
            <span class="mc-text">${opt}</span>
        </button>
    `).join('');
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}" data-correct="${correctIndex}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="mc-options">
                ${optionsHTML}
            </div>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderTrueFalse(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}" data-correct="${ex.correct}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="tf-options">
                <button type="button" class="tf-btn tf-true" data-value="true"
                        onclick="handleTrueFalse('${exerciseId}', ${index}, true, ${ex.correct})">
                    <span class="tf-icon">✓</span>
                    <span class="tf-label">Sant</span>
                </button>
                <button type="button" class="tf-btn tf-false" data-value="false"
                        onclick="handleTrueFalse('${exerciseId}', ${index}, false, ${ex.correct})">
                    <span class="tf-icon">✗</span>
                    <span class="tf-label">Falskt</span>
                </button>
            </div>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderFillBlank(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            ${ex.hint ? `<p class="exercise-hint">💡 Ledtråd: ${ex.hint}</p>` : ''}
            <div class="fill-blank-container">
                <input type="text" id="input-${exerciseId}" class="fill-blank-input" placeholder="Skriv ditt svar...">
                <button class="btn btn-small" onclick="handleFillBlank('${exerciseId}', ${index})">Kontrollera</button>
            </div>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderCalculation(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            ${ex.hint ? `<p class="exercise-hint">💡 Ledtråd: ${ex.hint}</p>` : ''}
            <div class="calculation-container">
                <input type="number" id="input-${exerciseId}" class="calculation-input" placeholder="Svar" step="any">
                <span class="unit-label">${ex.unit || ''}</span>
                <button class="btn btn-small" onclick="handleCalculation('${exerciseId}', ${index})">Kontrollera</button>
            </div>
            ${ex.steps ? `
                <button class="btn btn-link" onclick="toggleSteps('${exerciseId}')">Visa lösningssteg</button>
                <div class="steps-container" id="steps-${exerciseId}" style="display: none;">
                    <h5>Lösningssteg:</h5>
                    <ol>${ex.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                </div>
            ` : ''}
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderMatching(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    // Skapa shufflad lista med original-index
    const shuffledRight = ex.pairs.map((pair, i) => ({ text: pair.right, origIndex: i }))
        .sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <div class="matching-grid">
                ${ex.pairs.map((pair, i) => `
                    <div class="match-row" data-pair="${i}">
                        <div class="match-left">${pair.left}</div>
                        <div class="match-arrow">→</div>
                        <div class="match-right-wrapper">
                            <div class="match-right-options" data-pair="${i}">
                                ${shuffledRight.map((item) => `
                                    <button type="button" class="match-choice" 
                                            data-value="${item.origIndex}"
                                            onclick="selectMatchOption(this, ${i})">
                                        ${item.text}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="handleMatching('${exerciseId}', ${index})">Kontrollera</button>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function selectMatchOption(btn, pairIndex) {
    // Avmarkera andra i samma rad
    const wrapper = btn.closest('.match-right-options');
    wrapper.querySelectorAll('.match-choice').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function renderOrdering(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const shuffledItems = ex.items.map((item, i) => ({ text: item, origIndex: i }))
        .sort(() => Math.random() - 0.5);
    
    // Detektera om det är en touch-enhet
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const helpText = isTouchDevice 
        ? '👆 Tryck på ett objekt och sedan på ett annat för att byta plats. Eller håll in för att dra.'
        : '🖱️ Dra och släpp för att ordna objekten i rätt ordning.';
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <p class="ordering-help">${helpText}</p>
            <div class="ordering-container" id="ordering-${exerciseId}">
                ${shuffledItems.map((item, i) => `
                    <div class="ordering-item" draggable="true" data-original="${item.origIndex}" data-pos="${i}">
                        <span class="order-number">${i + 1}</span>
                        <span class="item-text">${item.text}</span>
                        <span class="drag-handle">⋮⋮</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="handleOrdering('${exerciseId}', ${index})">Kontrollera</button>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderTimeline(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    const shuffledItems = ex.items.map((item, i) => ({ text: item, origIndex: i }))
        .sort(() => Math.random() - 0.5);
    
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const helpText = isTouchDevice 
        ? '👆 Tryck på ett objekt och sedan på ett annat för att byta plats.'
        : '🖱️ Dra och släpp för att ordna i kronologisk ordning.';
    
    return `
        <div class="exercise-item" id="exercise-${exerciseId}" data-index="${index}">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">${ex.question}</span>
            </div>
            <p class="ordering-help">${helpText}</p>
            <div class="timeline-container ordering-container" id="timeline-${exerciseId}">
                ${shuffledItems.map((item, i) => `
                    <div class="ordering-item timeline-item" draggable="true" data-original="${item.origIndex}" data-pos="${i}">
                        <span class="order-number">${i + 1}</span>
                        <span class="item-text">${item.text}</span>
                        <span class="drag-handle">⋮⋮</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="handleTimeline('${exerciseId}', ${index})">Kontrollera</button>
            <div class="exercise-feedback" id="feedback-${exerciseId}" style="display: none;">
                <p class="feedback-text"></p>
                ${ex.explanation ? `<p class="feedback-explanation">${ex.explanation}</p>` : ''}
            </div>
        </div>
    `;
}

function renderReflection(ex, index, num) {
    const exerciseId = ex.id || `ex-${index}`;
    
    let content = `
        <div class="exercise-item reflection-card" id="exercise-${exerciseId}" data-index="${index}" data-type="reflection">
            <div class="exercise-question">
                <span class="exercise-number">${num}.</span>
                <span class="exercise-text">🤔 ${ex.question}</span>
            </div>
    `;
    
    if (ex.hints) {
        content += `
            <div class="reflection-hints">
                <h5>Tänk på:</h5>
                <ul>${ex.hints.map(h => `<li>${h}</li>`).join('')}</ul>
            </div>
        `;
    }
    
    content += `
            <textarea class="reflection-textarea" placeholder="Skriv dina tankar här (valfritt)..."></textarea>
            <p class="reflection-note">Detta är en reflektionsuppgift utan rätt eller fel svar.</p>
        </div>
    `;
    
    return content;
}

// === HANDLERS ===

function handleMultipleChoice(exerciseId, index, selected, correct) {
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    const options = exerciseEl.querySelectorAll('.mc-option-btn');
    
    // Inaktivera alla
    options.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove('selected', 'correct', 'incorrect');
        if (i === correct) {
            btn.classList.add('correct');
        } else if (i === selected && selected !== correct) {
            btn.classList.add('incorrect');
        }
    });
    
    const isCorrect = selected === correct;
    userAnswers[index] = isCorrect;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
        exerciseEl.classList.add('answered-correct');
    } else {
        feedbackText.textContent = '❌ Fel!';
        feedbackText.className = 'feedback-text incorrect';
        exerciseEl.classList.add('answered-wrong');
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleTrueFalse(exerciseId, index, selected, correct) {
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    const buttons = exerciseEl.querySelectorAll('.tf-btn');
    
    buttons.forEach((btn) => {
        btn.disabled = true;
        const btnValue = btn.dataset.value === 'true';
        btn.classList.remove('correct', 'incorrect');
        if (btnValue === correct) {
            btn.classList.add('correct');
        } else if (btnValue === selected && selected !== correct) {
            btn.classList.add('incorrect');
        }
    });
    
    const isCorrect = selected === correct;
    userAnswers[index] = isCorrect;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = '❌ Fel!';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleFillBlank(exerciseId, index) {
    const input = document.getElementById(`input-${exerciseId}`);
    const exercise = currentExercises[index];
    const userAnswer = input.value.trim().toLowerCase();
    
    let isCorrect = userAnswer === exercise.answer.toLowerCase();
    
    if (!isCorrect && exercise.alternatives) {
        isCorrect = exercise.alternatives.some(alt => alt.toLowerCase() === userAnswer);
    }
    
    userAnswers[index] = isCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    input.disabled = true;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
        input.classList.add('correct-input');
    } else {
        feedbackText.textContent = `❌ Fel! Rätt svar: ${exercise.answer}`;
        feedbackText.className = 'feedback-text incorrect';
        input.classList.add('incorrect-input');
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleCalculation(exerciseId, index) {
    const input = document.getElementById(`input-${exerciseId}`);
    const exercise = currentExercises[index];
    const userAnswer = parseFloat(input.value);
    
    const tolerance = exercise.tolerance || 0.01;
    const isCorrect = Math.abs(userAnswer - exercise.answer) <= tolerance;
    
    userAnswers[index] = isCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    input.disabled = true;
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = `❌ Fel! Rätt svar: ${exercise.answer} ${exercise.unit || ''}`;
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleMatching(exerciseId, index) {
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const rows = exerciseEl.querySelectorAll('.match-row');
    
    let allCorrect = true;
    rows.forEach((row, i) => {
        const selected = row.querySelector('.match-choice.selected');
        const wrapper = row.querySelector('.match-right-options');
        
        // Inaktivera alla knappar
        wrapper.querySelectorAll('.match-choice').forEach(btn => btn.disabled = true);
        
        if (selected && parseInt(selected.dataset.value) === i) {
            selected.classList.add('correct');
        } else {
            allCorrect = false;
            if (selected) {
                selected.classList.add('incorrect');
            }
            // Visa rätt svar
            wrapper.querySelector(`.match-choice[data-value="${i}"]`).classList.add('correct');
        }
    });
    
    userAnswers[index] = allCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    if (allCorrect) {
        feedbackText.textContent = '✅ Alla rätt!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = '❌ Några fel. Gröna visar rätt svar.';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleOrdering(exerciseId, index) {
    const container = document.getElementById(`ordering-${exerciseId}`) || 
                      document.getElementById(`timeline-${exerciseId}`);
    const items = container.querySelectorAll('.ordering-item');
    
    let isCorrect = true;
    items.forEach((item, i) => {
        item.classList.remove('correct-order', 'incorrect-order');
        if (parseInt(item.dataset.original) !== i) {
            isCorrect = false;
            item.classList.add('incorrect-order');
        } else {
            item.classList.add('correct-order');
        }
    });
    
    userAnswers[index] = isCorrect;
    
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const feedbackText = feedbackEl.querySelector('.feedback-text');
    
    if (isCorrect) {
        feedbackText.textContent = '✅ Rätt ordning!';
        feedbackText.className = 'feedback-text correct';
    } else {
        feedbackText.textContent = '❌ Fel ordning. Gröna är på rätt plats.';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function handleTimeline(exerciseId, index) {
    handleOrdering(exerciseId, index);
}

function toggleSteps(exerciseId) {
    const stepsEl = document.getElementById(`steps-${exerciseId}`);
    stepsEl.style.display = stepsEl.style.display === 'none' ? 'block' : 'none';
}

function updateResults() {
    const totalGradable = currentExercises.filter(ex => 
        (ex.type || 'multiple-choice') !== 'reflection'
    ).length;
    
    const answered = Object.keys(userAnswers).length;
    const correct = Object.values(userAnswers).filter(v => v).length;
    
    const resultsEl = document.getElementById('exerciseResults');
    if (resultsEl && answered >= totalGradable && totalGradable > 0) {
        document.getElementById('correctCount').textContent = correct;
        document.getElementById('totalCount').textContent = totalGradable;
        resultsEl.style.display = 'block';
    }
}

function resetExercises() {
    userAnswers = {};
    loadExercises(currentExercises);
    const resultsEl = document.getElementById('exerciseResults');
    if (resultsEl) {
        resultsEl.style.display = 'none';
    }
}

// =============================================
// DRAG AND DROP + TOUCH + TAP-TO-SWAP
// Förbättrad mobilkompatibilitet + Desktop drag fix
// =============================================

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

function initDragAndDrop() {
    const containers = document.querySelectorAll('.ordering-container');
    
    containers.forEach(container => {
        const items = container.querySelectorAll('.ordering-item');
        
        items.forEach(item => {
            // Sätt draggable för desktop
            item.setAttribute('draggable', 'true');
            
            // Desktop drag events - lägg till på BÅDE item och container
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
        
        // Dragover och drop på CONTAINER nivå (viktigt för desktop!)
        container.addEventListener('dragover', handleContainerDragOver);
        container.addEventListener('drop', handleContainerDrop);
    });
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
        updateOrderNumbers(draggedItem.parentNode);
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
            updateOrderNumbers(touchCurrentItem.parentNode);
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


// === GLOBAL EXPORTS ===
window.loadExercises = loadExercises;
window.resetExercises = resetExercises;
window.handleMultipleChoice = handleMultipleChoice;
window.handleTrueFalse = handleTrueFalse;
window.handleFillBlank = handleFillBlank;
window.handleCalculation = handleCalculation;
window.handleMatching = handleMatching;
window.handleOrdering = handleOrdering;
window.handleTimeline = handleTimeline;
window.toggleSteps = toggleSteps;
window.selectMatchOption = selectMatchOption;
