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

// Fisher-Yates shuffle (more reliable than sort random)
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Shuffle questions on load
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

        // 1. DETERMINE TYPE
        const correctCount = q.correct.length;
        const isMulti = correctCount > 1;
        const inputType = isMulti ? 'multi' : 'single';
        const typeText = isMulti ? `(Select ${correctCount})` : '(Select 1)';

        // 2. SHUFFLE OPTIONS AND TRACK CORRECT INDICES
        // Create array of {text, wasCorrect} objects
        const optionsWithMeta = q.options.map((opt, i) => ({
            text: opt,
            wasCorrect: q.correct.includes(i)
        }));
        const shuffledOptions = shuffle(optionsWithMeta);

        // Store new correct indices on the card for later checking
        const newCorrectIndices = [];
        shuffledOptions.forEach((opt, i) => {
            if (opt.wasCorrect) newCorrectIndices.push(i);
        });

        // Image HTML
        let imagesHtml = '';
        q.images.forEach(src => {
            imagesHtml += `<img src="${src}" class="q-img" loading="lazy">`;
        });

        // Options HTML (using shuffled options)
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
    const card = document.getElementById(`q-${index}`);
    const list = document.getElementById(`opt-list-${index}`);
    const options = list.querySelectorAll('.option');
    const btn = card.querySelector('.btn-check');
    const exp = document.getElementById(`exp-${index}`);

    // Get correct indices from the shuffled data stored on the list
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

    // Compare logic
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

init();