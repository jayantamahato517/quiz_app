const quizData = [
    {
        question: "What is the correct extension of Python?",
        options: [".py", ".pt", ".python", ".p"],
        answer: 0
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: 2
    },
    {
        question: "What is the output of 2 ** 3?",
        options: ["6", "8", "9", "5"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    optionsEl.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.style.background = "#eee";
    });

    nextBtn.style.display = "none";
}

function checkAnswer(selected) {
    let correct = quizData[currentQuestion].answer;

    if (selected === correct) {
        score++;
        optionsEl[selected].style.background = "#90ee90";
    } else {
        optionsEl[selected].style.background = "#ff7f7f";
        optionsEl[correct].style.background = "#90ee90";
    }

    optionsEl.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.innerText = "Quiz Completed!";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
}
