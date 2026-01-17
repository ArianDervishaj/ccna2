// 'quizData' is available globally from quiz_data.js

let stats = {
    correct: 0,
    wrong: 0,
    total: quizData.length,
    answered: 0
};

const container = document.getElementById('quiz-container');
const elCorrect = document.getElementById('score-correct');
const elWrong = document.getElementById('score-wrong');
const elRemaining = document.getElementById('score-remaining');
const elProgress = document.getElementById('progress-fill');

// Fisher-Yates shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const shuffledQuiz = shuffle(quizData);

function init() {
    updateScoreboard();
    renderQuestions();
}

function updateScoreboard() {
    elCorrect.textContent = stats.correct;
    elWrong.textContent = stats.wrong;
    elRemaining.textContent = stats.total - stats.answered;

    const percentage = (stats.answered / stats.total) * 100;
    elProgress.style.width = `${percentage}%`;
}

function renderQuestions() {
    shuffledQuiz.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `q-${index}`;

        // Check question type
        if (q.type === 'matching') {
            renderMatchingQuestion(card, q, index);
        } else {
            renderMultipleChoice(card, q, index);
        }

        container.appendChild(card);
    });
}

// ========== MULTIPLE CHOICE RENDERER ==========
function renderMultipleChoice(card, q, index) {
    const correctCount = q.correct.length;
    const isMulti = correctCount > 1;
    const inputType = isMulti ? 'multi' : 'single';
    const typeText = isMulti ? `(Select ${correctCount})` : '(Select 1)';

    const optionsWithMeta = q.options.map((opt, i) => ({
        text: opt,
        wasCorrect: q.correct.includes(i)
    }));
    const shuffledOptions = shuffle(optionsWithMeta);

    const newCorrectIndices = [];
    shuffledOptions.forEach((opt, i) => {
        if (opt.wasCorrect) newCorrectIndices.push(i);
    });

    let imagesHtml = '';
    q.images.forEach(src => {
        imagesHtml += `<img src="${src}" class="q-img" loading="lazy">`;
    });

    let optionsHtml = '';
    shuffledOptions.forEach((opt, optIndex) => {
        const safeOpt = opt.text.replace(/"/g, '&quot;');
        optionsHtml += `<li class="option" data-idx="${optIndex}" onclick="selectOption(this)">${safeOpt}</li>`;
    });

    card.innerHTML = `
        <div class="q-header">
            <span class="q-title">${q.title}</span>
            <span class="q-hint">${typeText}</span>
        </div>
        <div class="q-text">${q.text}</div>
        ${imagesHtml}
        
        <ul class="options" id="opt-list-${index}" data-type="${inputType}" data-correct="${JSON.stringify(newCorrectIndices)}">
            ${optionsHtml}
        </ul>
        
        <button class="btn-check" onclick="checkAnswer(${index})">Check Answer</button>
        <div class="explanation" id="exp-${index}">
            <strong>Explanation:</strong><br>
            ${q.explanation || "No explanation provided."}
        </div>
    `;
}

// ========== MATCHING QUESTION RENDERER ==========
function renderMatchingQuestion(card, q, index) {
    // Shuffle left items and right items independently
    const shuffledLeft = shuffle(q.pairs.map((p, i) => ({ text: p.left, originalIndex: i })));
    const shuffledRight = shuffle(q.pairs.map((p, i) => ({ text: p.right, originalIndex: i })));
    
    // Add distractors to right side if present (supports both old 'distractors' and new 'distractors_right')
    const rightDistractors = q.distractors_right || q.distractors || [];
    if (rightDistractors.length > 0) {
        rightDistractors.forEach(d => {
            shuffledRight.push({ text: d, originalIndex: -1 }); // -1 = distractor
        });
        const reshuffledRight = shuffle(shuffledRight);
        shuffledRight.length = 0;
        reshuffledRight.forEach(item => shuffledRight.push(item));
    }
    
    // Add distractors to left side if present
    const leftDistractors = q.distractors_left || [];
    if (leftDistractors.length > 0) {
        leftDistractors.forEach(d => {
            shuffledLeft.push({ text: d, originalIndex: -2 }); // -2 = left distractor
        });
        const reshuffledLeft = shuffle(shuffledLeft);
        shuffledLeft.length = 0;
        reshuffledLeft.forEach(item => shuffledLeft.push(item));
    }

    // Build correct mapping: leftShuffledIndex -> rightShuffledIndex (excluding left distractors)
    const correctMapping = {};
    shuffledLeft.forEach((leftItem, leftIdx) => {
        // Skip left distractors (originalIndex -2)
        if (leftItem.originalIndex < 0) return;
        const rightIdx = shuffledRight.findIndex(r => r.originalIndex === leftItem.originalIndex);
        correctMapping[leftIdx] = rightIdx;
    });
    
    // Track which left items are distractors (for display purposes)
    const leftDistractorIndices = [];
    shuffledLeft.forEach((item, idx) => {
        if (item.originalIndex === -2) leftDistractorIndices.push(idx);
    });

    let leftHtml = '';
    shuffledLeft.forEach((item, idx) => {
        const isDistractor = item.originalIndex === -2;
        leftHtml += `<div class="match-item match-left ${isDistractor ? 'is-distractor' : ''}" data-idx="${idx}" data-distractor="${isDistractor}" onclick="selectMatchLeft(this, ${index})">${item.text}</div>`;
    });

    let rightHtml = '';
    shuffledRight.forEach((item, idx) => {
        const isDistractor = item.originalIndex === -1;
        rightHtml += `<div class="match-item match-right ${isDistractor ? 'is-distractor' : ''}" data-idx="${idx}" data-distractor="${isDistractor}" onclick="selectMatchRight(this, ${index})">${item.text}</div>`;
    });

    card.innerHTML = `
        <div class="q-header">
            <span class="q-title">${q.title}</span>
            <span class="q-hint">(Match items)</span>
        </div>
        <div class="q-text">${q.text || ''}</div>
        
        <div class="match-container" id="match-${index}" data-correct='${JSON.stringify(correctMapping)}' data-left-distractors='${JSON.stringify(leftDistractorIndices)}'>
            <div class="match-column match-column-left">
                ${leftHtml}
            </div>
            <div class="match-lines" id="lines-${index}"></div>
            <div class="match-column match-column-right">
                ${rightHtml}
            </div>
        </div>
        
        <div class="match-status" id="status-${index}"></div>
        
        <button class="btn-check" onclick="checkMatchAnswer(${index})">Check Answer</button>
        <div class="explanation" id="exp-${index}">
            <strong>Explanation:</strong><br>
            ${q.explanation || "No explanation provided."}
        </div>
    `;

    // Store user matches
    card.dataset.userMatches = JSON.stringify({});
    card.dataset.selectedLeft = '';
}

// ========== MATCHING INTERACTION ==========
let selectedLeft = {}; // Track selected left item per question

window.selectMatchLeft = function(el, qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (card.classList.contains('answered')) return;

    const container = document.getElementById(`match-${qIndex}`);
    const leftItems = container.querySelectorAll('.match-left');
    
    // Deselect all left items
    leftItems.forEach(item => item.classList.remove('selected'));
    
    // Select this one
    el.classList.add('selected');
    selectedLeft[qIndex] = el.dataset.idx;
};

window.selectMatchRight = function(el, qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (card.classList.contains('answered')) return;
    
    // Must have a left item selected first
    if (selectedLeft[qIndex] === undefined || selectedLeft[qIndex] === '') return;

    const leftIdx = selectedLeft[qIndex];
    const rightIdx = el.dataset.idx;

    // Get current matches
    let userMatches = JSON.parse(card.dataset.userMatches);
    
    // Check if this right item was already matched to something else
    for (let key in userMatches) {
        if (userMatches[key] === rightIdx) {
            delete userMatches[key]; // Remove old match
        }
    }
    
    // Add new match
    userMatches[leftIdx] = rightIdx;
    card.dataset.userMatches = JSON.stringify(userMatches);

    // Clear left selection
    const container = document.getElementById(`match-${qIndex}`);
    container.querySelectorAll('.match-left').forEach(item => item.classList.remove('selected'));
    selectedLeft[qIndex] = '';

    // Redraw lines
    drawLines(qIndex);
    updateMatchStatus(qIndex);
};

function drawLines(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const container = document.getElementById(`match-${qIndex}`);
    const linesContainer = document.getElementById(`lines-${qIndex}`);
    const userMatches = JSON.parse(card.dataset.userMatches);

    // Clear existing lines
    linesContainer.innerHTML = '';

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none';

    const containerRect = linesContainer.getBoundingClientRect();

    for (let leftIdx in userMatches) {
        const rightIdx = userMatches[leftIdx];
        const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
        const rightEl = container.querySelector(`.match-right[data-idx="${rightIdx}"]`);

        if (leftEl && rightEl) {
            const leftRect = leftEl.getBoundingClientRect();
            const rightRect = rightEl.getBoundingClientRect();

            const x1 = 0;
            const y1 = leftRect.top - containerRect.top + leftRect.height / 2;
            const x2 = containerRect.width;
            const y2 = rightRect.top - containerRect.top + rightRect.height / 2;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#3498db');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('data-left', leftIdx);
            line.setAttribute('data-right', rightIdx);

            svg.appendChild(line);
        }
    }

    linesContainer.appendChild(svg);
}

function updateMatchStatus(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const container = document.getElementById(`match-${qIndex}`);
    const statusEl = document.getElementById(`status-${qIndex}`);
    const userMatches = JSON.parse(card.dataset.userMatches);
    const correctMapping = JSON.parse(container.dataset.correct);

    const totalPairs = Object.keys(correctMapping).length;
    const matchedPairs = Object.keys(userMatches).length;

    statusEl.textContent = `Matched: ${matchedPairs} / ${totalPairs}`;
}

window.checkMatchAnswer = function(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const container = document.getElementById(`match-${qIndex}`);
    const btn = card.querySelector('.btn-check');
    const exp = document.getElementById(`exp-${qIndex}`);

    const userMatches = JSON.parse(card.dataset.userMatches);
    const correctMapping = JSON.parse(container.dataset.correct);
    const leftDistractorIndices = JSON.parse(container.dataset.leftDistractors || '[]');

    const totalPairs = Object.keys(correctMapping).length;
    const matchedPairs = Object.keys(userMatches).length;

    if (matchedPairs < totalPairs) {
        alert(`Please match all ${totalPairs} items.`);
        return;
    }

    card.classList.add('answered');

    // Check each match
    let allCorrect = true;
    const linesContainer = document.getElementById(`lines-${qIndex}`);
    const svg = linesContainer.querySelector('svg');

    // Check correct mappings (non-distractor left items)
    for (let leftIdx in correctMapping) {
        const expectedRight = correctMapping[leftIdx];
        const userRight = userMatches[leftIdx];
        const isCorrect = (userRight == expectedRight);

        // Color the line
        if (svg) {
            const line = svg.querySelector(`line[data-left="${leftIdx}"]`);
            if (line) {
                line.setAttribute('stroke', isCorrect ? '#28a745' : '#dc3545');
                line.setAttribute('stroke-width', '3');
            }
        }

        // Color the items
        const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
        const rightEl = container.querySelector(`.match-right[data-idx="${userRight}"]`);

        if (isCorrect) {
            leftEl?.classList.add('match-correct');
            rightEl?.classList.add('match-correct');
        } else {
            allCorrect = false;
            leftEl?.classList.add('match-wrong');
            rightEl?.classList.add('match-wrong');
        }
    }

    // Check if user matched any left distractors (always wrong)
    for (let leftIdx in userMatches) {
        if (leftDistractorIndices.includes(parseInt(leftIdx))) {
            allCorrect = false;
            const rightIdx = userMatches[leftIdx];
            
            // Color the line red
            if (svg) {
                const line = svg.querySelector(`line[data-left="${leftIdx}"]`);
                if (line) {
                    line.setAttribute('stroke', '#dc3545');
                    line.setAttribute('stroke-width', '3');
                }
            }
            
            // Mark both items as wrong
            const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
            const rightEl = container.querySelector(`.match-right[data-idx="${rightIdx}"]`);
            leftEl?.classList.add('match-wrong');
            rightEl?.classList.add('match-wrong');
        }
    }

    if (allCorrect) {
        stats.correct++;
    } else {
        stats.wrong++;
    }
    stats.answered++;
    updateScoreboard();

    exp.style.display = 'block';
    btn.style.display = 'none';
};

// ========== MULTIPLE CHOICE INTERACTION ==========
window.selectOption = function (el) {
    const list = el.parentElement;
    const card = el.closest('.card');

    if (card.classList.contains('answered')) return;

    const type = list.dataset.type;

    if (type === 'single') {
        const siblings = list.querySelectorAll('.option');
        siblings.forEach(opt => opt.classList.remove('selected'));
        el.classList.add('selected');
    } else {
        el.classList.toggle('selected');
    }
};

window.checkAnswer = function (index) {
    const card = document.getElementById(`q-${index}`);
    const list = document.getElementById(`opt-list-${index}`);
    const options = list.querySelectorAll('.option');
    const btn = card.querySelector('.btn-check');
    const exp = document.getElementById(`exp-${index}`);

    const correctIndices = JSON.parse(list.dataset.correct);

    const selectedIndices = [];
    options.forEach((opt, i) => {
        if (opt.classList.contains('selected')) {
            selectedIndices.push(i);
        }
    });

    if (selectedIndices.length === 0) {
        alert("Please select an answer.");
        return;
    }

    card.classList.add('answered');

    const correctSorted = [...correctIndices].sort().toString();
    const selectedSorted = [...selectedIndices].sort().toString();
    const isCorrect = (correctSorted === selectedSorted);

    if (isCorrect) {
        stats.correct++;
    } else {
        stats.wrong++;
    }
    stats.answered++;
    updateScoreboard();

    options.forEach((opt, i) => {
        if (correctIndices.includes(i)) {
            opt.classList.add('correct');
        } else if (opt.classList.contains('selected')) {
            opt.classList.add('wrong');
        }
    });

    exp.style.display = 'block';
    btn.style.display = 'none';
};

// Redraw lines on window resize
window.addEventListener('resize', () => {
    shuffledQuiz.forEach((q, index) => {
        if (q.type === 'matching') {
            drawLines(index);
        }
    });
});

init();