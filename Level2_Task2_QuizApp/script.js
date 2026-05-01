// QUESTIONS DATA
const questions = [
    {
        question: "What is HTML?",
        answers: ["Programming Language", "Markup Language", "Database", "Operating System"],
        correct: 1
    },
    {
        question: "Which is used for styling?",
        answers: ["HTML", "CSS", "Python", "Java"],
        correct: 1
    },
    {
        question: "JavaScript is used for?",
        answers: ["Styling", "Structure", "Logic", "Database"],
        correct: 2
    }
];

// VARIABLES
let currentQuestion = 0;
let score = 0;
let answered = false;

// LOAD QUESTION
function loadQuestion() {
    answered = false;

    document.getElementById("progress").innerText =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, index) => {
        btn.innerText = q.answers[index];

        // Reset styles
        btn.style.background = "#333";
        btn.disabled = false;

        // Click event
        btn.onclick = function () {
            selectAnswer(index);
        };
    });
}

// SELECT ANSWER
function selectAnswer(index) {
    if (answered) return;

    answered = true;

    let correctAnswer = questions[currentQuestion].correct;
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn, i) => {
        if (i === correctAnswer) {
            btn.style.background = "green";
        } else if (i === index) {
            btn.style.background = "red";
        }

        btn.disabled = true;
    });

    if (index === correctAnswer) {
        score++;
    }
}

// NEXT BUTTON
document.getElementById("nextBtn").onclick = function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

// SHOW RESULT
function showResult() {
    document.querySelector(".quiz-container").innerHTML =
        "<h2>Your Score: " + score + " / " + questions.length + "</h2>";
}

// INITIAL LOAD
loadQuestion();