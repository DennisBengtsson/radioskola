// Övningshantering för introduktionskapitlen

let currentExercises = [];
let userAnswers = {};

function loadExercises(exercises) {
    currentExercises = exercises;
    userAnswers = {};
    
    const container = document.getElementById('exercisesContainer');
    if (!container) return;
    
    container.innerHTML = exercises.map((ex, index) => renderExercise(ex, index)).join('');
    
    // Initiera drag and drop efter att övningar laddats
    initDragAndDrop();
}

function renderExercise(exercise, index) {
    const num = index + 1;
    
    switch(exercise.type) {
        case 'multiple-choice':
            return renderMultipleChoice(exercise, num);
        case 'true-false':
            return renderTrueFalse(exercise, num);
        case 'fill-blank':
            return renderFillBlank(exercise, num);
        case 'matching':
            return renderMatching(exercise, num);
        case 'ordering':
            return renderOrdering(exercise, num);
        case 'calculation':
            return renderCalculation(exercise, num);
        case 'reflection':
            return renderReflection(exercise, num);
        case 'timeline':
            return renderTimeline(exercise, num);
        default:
            return `<div class="exercise-card">Okänd övningstyp: ${exercise.type}</div>`;
    }
}

function renderMultipleChoice(ex, num) {
    const optionsHTML = ex.options.map((opt, i) => `
        <label class="option-label">
            <input type="radio" name="ex-${ex.id}" value="${i}" onchange="checkAnswer('${ex.id}', ${i}, ${ex.correct}, 'multiple-choice')">
            <span class="option-text">${opt}</span>
        </label>
    `).join('');
    
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Flervalsfråga</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            <div class="options-container">
                ${optionsHTML}
            </div>
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderTrueFalse(ex, num) {
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Sant eller falskt</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            <div class="options-container true-false-options">
                <label class="option-label">
                    <input type="radio" name="ex-${ex.id}" value="true" onchange="checkAnswer('${ex.id}', true, ${ex.correct}, 'true-false')">
                    <span class="option-text">✓ Sant</span>
                </label>
                <label class="option-label">
                    <input type="radio" name="ex-${ex.id}" value="false" onchange="checkAnswer('${ex.id}', false, ${ex.correct}, 'true-false')">
                    <span class="option-text">✗ Falskt</span>
                </label>
            </div>
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderFillBlank(ex, num) {
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Fyll i</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            ${ex.hint ? `<p class="exercise-hint">💡 Ledtråd: ${ex.hint}</p>` : ''}
            <div class="fill-blank-container">
                <input type="text" id="input-${ex.id}" class="fill-blank-input" placeholder="Skriv ditt svar...">
                <button class="btn btn-small" onclick="checkFillBlank('${ex.id}')">Kontrollera</button>
            </div>
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderCalculation(ex, num) {
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Beräkning</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            ${ex.hint ? `<p class="exercise-hint">💡 Ledtråd: ${ex.hint}</p>` : ''}
            <div class="calculation-container">
                <input type="number" id="input-${ex.id}" class="calculation-input" placeholder="Svar" step="any">
                <span class="unit-label">${ex.unit || ''}</span>
                <button class="btn btn-small" onclick="checkCalculation('${ex.id}', ${ex.answer})">Kontrollera</button>
            </div>
            ${ex.steps ? `
                <button class="btn btn-link" onclick="toggleSteps('${ex.id}')">Visa lösningssteg</button>
                <div class="steps-container" id="steps-${ex.id}" style="display: none;">
                    <h5>Lösningssteg:</h5>
                    <ol>${ex.steps.map(s => `<li>${s}</li>`).join('')}</ol>
                </div>
            ` : ''}
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderMatching(ex, num) {
    // Blanda högerkolumnen
    const shuffledRight = [...ex.pairs].sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Para ihop</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            <div class="matching-container">
                <div class="matching-column left-column">
                    ${ex.pairs.map((pair, i) => `
                        <div class="matching-item" data-index="${i}">${pair.left}</div>
                    `).join('')}
                </div>
                <div class="matching-column right-column">
                    ${ex.pairs.map((pair, i) => `
                        <select class="matching-select" data-pair="${i}">
                            <option value="">Välj...</option>
                            ${shuffledRight.map((p, j) => `<option value="${ex.pairs.indexOf(p)}">${p.right}</option>`).join('')}
                        </select>
                    `).join('')}
                </div>
            </div>
            <button class="btn btn-small" onclick="checkMatching('${ex.id}')">Kontrollera</button>
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderOrdering(ex, num) {
    // Blanda items
    const shuffledItems = [...ex.items].sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Ordna rätt</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            <div class="ordering-container" id="ordering-${ex.id}">
                ${shuffledItems.map((item, i) => `
                    <div class="ordering-item" draggable="true" data-original="${ex.items.indexOf(item)}">
                        <span class="drag-handle">⋮⋮</span>
                        <span class="item-text">${item}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="checkOrdering('${ex.id}')">Kontrollera</button>
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderTimeline(ex, num) {
    const shuffledItems = [...ex.items].sort(() => Math.random() - 0.5);
    
    return `
        <div class="exercise-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">Tidslinje</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
            <div class="timeline-container" id="timeline-${ex.id}">
                ${shuffledItems.map((item, i) => `
                    <div class="timeline-item" draggable="true" data-original="${ex.items.indexOf(item)}">
                        <span class="drag-handle">⋮⋮</span>
                        <span class="item-text">${item}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-small" onclick="checkTimeline('${ex.id}')">Kontrollera</button>
            <div class="feedback" id="feedback-${ex.id}" style="display: none;"></div>
        </div>
    `;
}

function renderReflection(ex, num) {
    let content = `
        <div class="exercise-card reflection-card" id="exercise-${ex.id}">
            <div class="exercise-header">
                <span class="exercise-number">Uppgift ${num}</span>
                <span class="exercise-type">🤔 Reflektera</span>
            </div>
            <p class="exercise-question">${ex.question}</p>
    `;
    
    if (ex.hints) {
        content += `
            <div class="reflection-hints">
                <h5>Tänk på:</h5>
                <ul>${ex.hints.map(h => `<li>${h}</li>`).join('')}</ul>
            </div>
        `;
    }
    
    if (ex.options) {
        content += `
            <div class="reflection-options">
                ${ex.options.map((opt, i) => `
                    <label class="reflection-option">
                        <input type="radio" name="ex-${ex.id}" value="${i}">
                        <span>${opt}</span>
                    </label>
                `).join('')}
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

// Kontrollera svar
function checkAnswer(exerciseId, userAnswer, correctAnswer, type) {
    const feedbackEl = document.getElementById(`feedback-${exerciseId}`);
    const exerciseEl = document.getElementById(`exercise-${exerciseId}`);
    const exercise = currentExercises.find(ex => ex.id === exerciseId);
    
    let isCorrect = false;
    
    if (type === 'true-false') {
        isCorrect = String(userAnswer) === String(correctAnswer);
    } else {
        isCorrect = userAnswer === correctAnswer;
    }
    
    userAnswers[exerciseId] = isCorrect;
    
    if (isCorrect) {
        feedbackEl.innerHTML = `<div class="feedback-correct">✓ Rätt! ${exercise.explanation || ''}</div>`;
        exerciseEl.classList.add('answered-correct');
        exerciseEl.classList.remove('answered-wrong');
    } else {
        feedbackEl.innerHTML = `<div class="feedback-wrong">✗ Fel. ${exercise.explanation || ''}</div>`;
        exerciseEl.classList.add('answered-wrong');
        exerciseEl.classList.remove('answered-correct');
    }
    
    feedbackEl.style.display = 'block';
    updateResults();
}

function checkFillBlank(exerciseId) {
    const input = document.getElementById(`input-${exerciseId}`);
    const exercise = currentExercises.find(ex => ex.id === exerciseId);
    const userAnswer = input.value.trim().toLowerCase();
    
    let isCorrect = userAnswer === exercise.answer.toLowerCase();
    
    // Kolla alternativa svar
    if (!isCorrect && exercise.alternatives) {
        isCorrect = exercise.alternatives.some(alt => alt.toLowerCase() === userAnswer);
    }
    
    checkAnswer(exerciseId, isCorrect ? 0 : 1, 0, 'fill-blank');
}

function checkCalculation(exerciseId, correctAnswer) {
    const input = document.getElementById(`input-${exerciseId}`);
    const exercise = currentExercises.find(ex => ex.id === exerciseId);
    const userAnswer = parseFloat(input.value);
    
    // Tillåt liten felmarginal för decimaltal
    const tolerance = exercise.tolerance || 0.01;
    const isCorrect = Math.abs(userAnswer - correctAnswer) <= tolerance;
    
    checkAnswer(exerciseId, isCorrect ? 0 : 1, 0, 'calculation');
}

function checkMatching(exerciseId) {
    const exercise = currentExercises.find(ex => ex.id === exerciseId);
    const selects = document.querySelectorAll(`#exercise-${exerciseId} .matching-select`);
    
    let allCorrect = true;
    selects.forEach((select, index) => {
        if (parseInt(select.value) !== index) {
            allCorrect = false;
        }
    });
    
    checkAnswer(exerciseId, allCorrect ? 0 : 1, 0, 'matching');
}

function checkOrdering(exerciseId) {
    const container = document.getElementById(`ordering-${exerciseId}`);
    const items = container.querySelectorAll('.ordering-item');
    
    let isCorrect = true;
    items.forEach((item, index) => {
        if (parseInt(item.dataset.original) !== index) {
            isCorrect = false;
        }
    });
    
    checkAnswer(exerciseId, isCorrect ? 0 : 1, 0, 'ordering');
}

function checkTimeline(exerciseId) {
    const container = document.getElementById(`timeline-${exerciseId}`);
    const items = container.querySelectorAll('.timeline-item');
    
    let isCorrect = true;
    items.forEach((item, index) => {
        if (parseInt(item.dataset.original) !== index) {
            isCorrect = false;
        }
    });
    
    checkAnswer(exerciseId, isCorrect ? 0 : 1, 0, 'timeline');
}

function toggleSteps(exerciseId) {
    const stepsEl = document.getElementById(`steps-${exerciseId}`);
    stepsEl.style.display = stepsEl.style.display === 'none' ? 'block' : 'none';
}

function updateResults() {
    const answered = Object.keys(userAnswers).length;
    const correct = Object.values(userAnswers).filter(v => v).length;
    
    // Exkludera reflektionsfrågor från totalen
    const totalGradable = currentExercises.filter(ex => ex.type !== 'reflection').length;
    
    const resultsEl = document.getElementById('exerciseResults');
    if (resultsEl && answered >= totalGradable) {
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

// Drag and drop för ordering och timeline
function initDragAndDrop() {
    const containers = document.querySelectorAll('.ordering-container, .timeline-container');
    
    containers.forEach(container => {
        const items = container.querySelectorAll('.ordering-item, .timeline-item');
        
        items.forEach(item => {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('drop', handleDrop);
            item.addEventListener('dragend', handleDragEnd);
        });
    });
}

let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const container = this.parentNode;
    const afterElement = getDragAfterElement(container, e.clientY);
    
    if (afterElement == null) {
        container.appendChild(draggedItem);
    } else {
        container.insertBefore(draggedItem, afterElement);
    }
}

function handleDrop(e) {
    e.preventDefault();
}

function handleDragEnd() {
    this.classList.remove('dragging');
    draggedItem = null;
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.ordering-item:not(.dragging), .timeline-item:not(.dragging)')];
    
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
