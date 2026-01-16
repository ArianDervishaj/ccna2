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
    quizData.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = `q-${index}`;

        // 1. DETERMINE TYPE
        const correctCount = q.correct.length;
        const isMulti = correctCount > 1;
        const inputType = isMulti ? 'multi' : 'single';
        const typeText = isMulti ? `(Select ${correctCount})` : '(Select 1)';

        // Image HTML
        let imagesHtml = '';
        q.images.forEach(src => {
            imagesHtml += `<img src="${src}" class="q-img" loading="lazy">`;
        });

        // Options HTML
        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            const safeOpt = opt.replace(/"/g, '&quot;');
            optionsHtml += `<li class="option" data-idx="${optIndex}" onclick="selectOption(this)">${safeOpt}</li>`;
        });

        card.innerHTML = `
            <div class="q-header">
                <span class="q-title">${q.title}</span>
                <span class="q-hint">${typeText}</span>
            </div>
            <div class="q-text">${q.text}</div>
            ${imagesHtml}
            
            <ul class="options" id="opt-list-${index}" data-type="${inputType}">
                ${optionsHtml}
            </ul>
            
            <button class="btn-check" onclick="checkAnswer(${index})">Check Answer</button>
            <div class="explanation" id="exp-${index}">
                <strong>Explanation:</strong><br>
                ${q.explanation || "No explanation provided."}
            </div>
        `;

        container.appendChild(card);
    });
}

// 2. UPDATED SELECTION LOGIC
window.selectOption = function (el) {
    const list = el.parentElement;
    const card = el.closest('.card');

    // Prevent changing if already submitted
    if (card.classList.contains('answered')) return;

    const type = list.dataset.type;

    if (type === 'single') {
        // If Single: Deselect all siblings first
        const siblings = list.querySelectorAll('.option');
        siblings.forEach(opt => opt.classList.remove('selected'));
        // Select the clicked one
        el.classList.add('selected');
    } else {
        // If Multi: Just toggle
        el.classList.toggle('selected');
    }
};

window.checkAnswer = function (index) {
    const q = quizData[index];
    const card = document.getElementById(`q-${index}`);
    const list = document.getElementById(`opt-list-${index}`);
    const options = list.querySelectorAll('.option');
    const btn = card.querySelector('.btn-check');
    const exp = document.getElementById(`exp-${index}`);

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

    // Compare logic
    const correctSorted = [...q.correct].sort().toString();
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
        if (q.correct.includes(i)) {
            opt.classList.add('correct');
        } else if (opt.classList.contains('selected')) {
            opt.classList.add('wrong');
        }
    });

    exp.style.display = 'block';
    btn.style.display = 'none';
};

init();