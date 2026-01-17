// 'quizData' is available globally from quiz_data.js

// ========== PERSISTENCE ==========
const STORAGE_KEY = 'ccna2_quiz_stats';

function loadStats() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

function saveStats(questionStats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questionStats));
}

function getQuestionStats(questionId) {
    const allStats = loadStats();
    return allStats[questionId] || { attempts: 0, correct: 0 };
}

function recordAnswer(questionId, isCorrect) {
    const allStats = loadStats();
    if (!allStats[questionId]) {
        allStats[questionId] = { attempts: 0, correct: 0 };
    }
    allStats[questionId].attempts++;
    if (isCorrect) {
        allStats[questionId].correct++;
    }
    saveStats(allStats);
}

function getSuccessRate(questionId) {
    const stats = getQuestionStats(questionId);
    if (stats.attempts === 0) return -1; // Unanswered
    return stats.correct / stats.attempts;
}

// ========== FILTERING & SORTING ==========
let currentFilter = 'all';
let currentSort = 'default';
let filteredQuiz = [];

function applyFilterAndSort() {
    const allStats = loadStats();
    
    // Filter
    filteredQuiz = quizData.filter(q => {
        const stats = allStats[q.id] || { attempts: 0, correct: 0 };
        const rate = stats.attempts > 0 ? stats.correct / stats.attempts : -1;
        
        switch (currentFilter) {
            case 'struggling':
                return stats.attempts > 0 && rate <= 0.5;
            case 'unanswered':
                return stats.attempts === 0;
            case 'learning':
                return stats.attempts > 0 && rate >= 0.5 && rate <= 0.9;
            case 'mastered':
                return stats.attempts > 0 && rate > 0.9;
            default:
                return true;
        }
    });
    
    // Sort
    if (currentSort === 'success-rate') {
        filteredQuiz.sort((a, b) => {
            const rateA = getSuccessRate(a.id);
            const rateB = getSuccessRate(b.id);
            // Unanswered (-1) goes to the end
            if (rateA === -1 && rateB === -1) return 0;
            if (rateA === -1) return 1;
            if (rateB === -1) return -1;
            return rateA - rateB; // Lowest first
        });
    } else {
        // Default: shuffle
        filteredQuiz = shuffle(filteredQuiz);
    }
    
    return filteredQuiz;
}

// ========== SESSION STATS ==========
let sessionStats = {
    correct: 0,
    wrong: 0,
    total: 0,
    answered: 0
};

const container = document.getElementById('quiz-container');
const elCorrect = document.getElementById('score-correct');
const elWrong = document.getElementById('score-wrong');
const elRemaining = document.getElementById('score-remaining');
const elPercentage = document.getElementById('score-percentage');
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

function init() {
    renderControls();
    applyFilterAndSort();
    sessionStats.total = filteredQuiz.length;
    updateScoreboard();
    renderQuestions();
}

function renderControls() {
    const controlsHtml = `
        <div class="controls">
            <div class="filter-group">
                <label>Filter:</label>
                <select id="filter-select" onchange="changeFilter(this.value)">
                    <option value="all">All (${quizData.length})</option>
                    <option value="struggling">Struggling (&lt;50%)</option>
                    <option value="learning">Learning (&gt;50% et &lt;90)</option>
                    <option value="unanswered">Unanswered</option>
                    <option value="mastered">Mastered (&gt;90%)</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Sort:</label>
                <select id="sort-select" onchange="changeSort(this.value)">
                    <option value="default">Random</option>
                    <option value="success-rate">Success Rate (Low→High)</option>
                </select>
            </div>
            <button class="btn-reset" onclick="resetStats()">Reset All Stats</button>
        </div>
    `;
    container.insertAdjacentHTML('beforebegin', controlsHtml);
    updateFilterCounts();
}

function updateFilterCounts() {
    const allStats = loadStats();
    let countAll = quizData.length;
    let countStruggling = 0;
    let countLearning = 0;
    let countUnanswered = 0;
    let countMastered = 0;
    
    quizData.forEach(q => {
        const stats = allStats[q.id] || { attempts: 0, correct: 0 };
        const rate = stats.attempts > 0 ? stats.correct / stats.attempts : -1;
        
        if (stats.attempts === 0) countUnanswered++;
        else if (rate < 0.5) countStruggling++;
        else if (rate > 0.9) countMastered++;
        else countLearning++;
    });
    
    const select = document.getElementById('filter-select');
    if (select) {
        select.options[0].text = `All (${countAll})`;
        select.options[1].text = `Struggling <50% (${countStruggling})`;
        select.options[2].text = `Learning >50% <90% (${countLearning})`;
        select.options[3].text = `Unanswered (${countUnanswered})`;
        select.options[4].text = `Mastered >90% (${countMastered})`;
    }
}

window.changeFilter = function(value) {
    currentFilter = value;
    reloadQuiz();
};

window.changeSort = function(value) {
    currentSort = value;
    reloadQuiz();
};

window.resetStats = function() {
    if (confirm('Are you sure you want to reset all statistics? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        reloadQuiz();
    }
};

function reloadQuiz() {
    container.innerHTML = '';
    applyFilterAndSort();
    sessionStats = {
        correct: 0,
        wrong: 0,
        total: filteredQuiz.length,
        answered: 0
    };
    updateScoreboard();
    updateFilterCounts();
    renderQuestions();
}

function updateScoreboard() {
    elCorrect.textContent = sessionStats.correct;
    elWrong.textContent = sessionStats.wrong;
    elRemaining.textContent = sessionStats.total - sessionStats.answered;

    const percentage = sessionStats.total > 0 ? (sessionStats.answered / sessionStats.total) * 100 : 0;
    elProgress.style.width = `${percentage}%`;
    
    // Calculate correct percentage based on total questions (unanswered = wrong)
    if (sessionStats.total > 0) {
        const correctPct = Math.round((sessionStats.correct / sessionStats.total) * 100);
        elPercentage.textContent = `${correctPct}%`;
        elPercentage.className = correctPct >= 70 ? 'pct-good' : 'pct-bad';
    } else {
        elPercentage.textContent = '0%';
        elPercentage.className = 'pct-bad';
    }
}

function renderQuestions() {
    if (filteredQuiz.length === 0) {
        container.innerHTML = '<div class="no-questions">No questions match this filter.</div>';
        return;
    }
    
    filteredQuiz.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `q-${index}`;
        card.dataset.questionId = q.id;

        // Check question type
        if (q.type === 'matching') {
            renderMatchingQuestion(card, q, index);
        } else {
            renderMultipleChoice(card, q, index);
        }

        container.appendChild(card);
    });
}

function getStatsHtml(questionId) {
    const stats = getQuestionStats(questionId);
    if (stats.attempts === 0) {
        return '<span class="q-stats unanswered">New</span>';
    }
    const rate = Math.round((stats.correct / stats.attempts) * 100);
    let className = 'neutral';
    if (rate > 90) className = 'mastered';
    else if (rate < 50) className = 'struggling';
    return `<span class="q-stats ${className}">${stats.correct}/${stats.attempts}</span>`;
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
            <div class="q-meta">
                ${getStatsHtml(q.id)}
                <span class="q-hint">${typeText}</span>
            </div>
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
    const shuffledLeft = shuffle(q.pairs.map((p, i) => ({ text: p.left, originalIndex: i, correctRight: p.right })));
    
    // Get unique right values only
    const uniqueRights = [...new Set(q.pairs.map(p => p.right))];
    const shuffledRight = shuffle(uniqueRights.map((text, i) => ({ text: text, originalIndex: i })));
    
    const rightDistractors = q.distractors_right || q.distractors || [];
    if (rightDistractors.length > 0) {
        rightDistractors.forEach(d => {
            shuffledRight.push({ text: d, originalIndex: -1 });
        });
        const reshuffledRight = shuffle(shuffledRight);
        shuffledRight.length = 0;
        reshuffledRight.forEach(item => shuffledRight.push(item));
    }
    
    const leftDistractors = q.distractors_left || [];
    if (leftDistractors.length > 0) {
        leftDistractors.forEach(d => {
            shuffledLeft.push({ text: d, originalIndex: -2, correctRight: null });
        });
        const reshuffledLeft = shuffle(shuffledLeft);
        shuffledLeft.length = 0;
        reshuffledLeft.forEach(item => shuffledLeft.push(item));
    }

    // Build correct mapping: leftShuffledIndex -> rightShuffledIndex (by matching text)
    const correctMapping = {};
    shuffledLeft.forEach((leftItem, leftIdx) => {
        if (leftItem.originalIndex < 0) return; // Skip distractors
        const rightIdx = shuffledRight.findIndex(r => r.text === leftItem.correctRight);
        correctMapping[leftIdx] = rightIdx;
    });
    
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
            <div class="q-meta">
                ${getStatsHtml(q.id)}
                <span class="q-hint">(Match items)</span>
            </div>
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

    card.dataset.userMatches = JSON.stringify({});
    card.dataset.selectedLeft = '';
}

// ========== MATCHING INTERACTION ==========
let selectedLeft = {};

window.selectMatchLeft = function(el, qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (card.classList.contains('answered')) return;

    const container = document.getElementById(`match-${qIndex}`);
    const leftItems = container.querySelectorAll('.match-left');
    
    leftItems.forEach(item => item.classList.remove('selected'));
    el.classList.add('selected');
    selectedLeft[qIndex] = el.dataset.idx;
};

window.selectMatchRight = function(el, qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    if (card.classList.contains('answered')) return;
    
    if (selectedLeft[qIndex] === undefined || selectedLeft[qIndex] === '') return;

    const leftIdx = selectedLeft[qIndex];
    const rightIdx = el.dataset.idx;

    let userMatches = JSON.parse(card.dataset.userMatches);
    
    // Don't remove existing matches to this right item - allow many-to-one
    // Just update or add the match for this left item
    userMatches[leftIdx] = rightIdx;
    card.dataset.userMatches = JSON.stringify(userMatches);

    const container = document.getElementById(`match-${qIndex}`);
    container.querySelectorAll('.match-left').forEach(item => item.classList.remove('selected'));
    selectedLeft[qIndex] = '';

    drawLines(qIndex);
    updateMatchStatus(qIndex);
};

function drawLines(qIndex) {
    const card = document.getElementById(`q-${qIndex}`);
    const container = document.getElementById(`match-${qIndex}`);
    const linesContainer = document.getElementById(`lines-${qIndex}`);
    const userMatches = JSON.parse(card.dataset.userMatches);

    linesContainer.innerHTML = '';

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
    const questionId = parseInt(card.dataset.questionId);
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

    let allCorrect = true;
    const linesContainer = document.getElementById(`lines-${qIndex}`);
    const svg = linesContainer.querySelector('svg');

    for (let leftIdx in correctMapping) {
        const expectedRight = correctMapping[leftIdx];
        const userRight = userMatches[leftIdx];
        const isCorrect = (userRight == expectedRight);

        if (svg) {
            const line = svg.querySelector(`line[data-left="${leftIdx}"]`);
            if (line) {
                line.setAttribute('stroke', isCorrect ? '#28a745' : '#dc3545');
                line.setAttribute('stroke-width', '3');
            }
        }

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

    for (let leftIdx in userMatches) {
        if (leftDistractorIndices.includes(parseInt(leftIdx))) {
            allCorrect = false;
            const rightIdx = userMatches[leftIdx];
            
            if (svg) {
                const line = svg.querySelector(`line[data-left="${leftIdx}"]`);
                if (line) {
                    line.setAttribute('stroke', '#dc3545');
                    line.setAttribute('stroke-width', '3');
                }
            }
            
            const leftEl = container.querySelector(`.match-left[data-idx="${leftIdx}"]`);
            const rightEl = container.querySelector(`.match-right[data-idx="${rightIdx}"]`);
            leftEl?.classList.add('match-wrong');
            rightEl?.classList.add('match-wrong');
        }
    }

    // Record to localStorage
    recordAnswer(questionId, allCorrect);
    
    // Update the stats display on this card
    const statsEl = card.querySelector('.q-stats');
    if (statsEl) {
        statsEl.outerHTML = getStatsHtml(questionId);
    }

    if (allCorrect) {
        sessionStats.correct++;
    } else {
        sessionStats.wrong++;
    }
    sessionStats.answered++;
    updateScoreboard();
    updateFilterCounts();

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
    const questionId = parseInt(card.dataset.questionId);
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

    // Record to localStorage
    recordAnswer(questionId, isCorrect);
    
    // Update the stats display on this card
    const statsEl = card.querySelector('.q-stats');
    if (statsEl) {
        statsEl.outerHTML = getStatsHtml(questionId);
    }

    if (isCorrect) {
        sessionStats.correct++;
    } else {
        sessionStats.wrong++;
    }
    sessionStats.answered++;
    updateScoreboard();
    updateFilterCounts();

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
    filteredQuiz.forEach((q, index) => {
        if (q.type === 'matching') {
            drawLines(index);
        }
    });
});

init();