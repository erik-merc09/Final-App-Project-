// Quiz data
let questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], correct: 1 },
    { question: "What is the capital of France?", options: ["London", "Paris", "Berlin"], correct: 1 },
    { question: "What color is the sky?", options: ["Green", "Blue", "Red"], correct: 1 },
    { question: "How many days in a week?", options: ["5", "6", "7"], correct: 2 },
    { question: "What is 10 - 3?", options: ["5", "7", "9"], correct: 1 },
    { question: "Which planet is closest to the sun?", options: ["Venus", "Mercury", "Mars"], correct: 1 },
    { question: "How many sides does a triangle have?", options: ["2", "3", "4"], correct: 1 },
    { question: "What is the largest ocean?", options: ["Atlantic", "Pacific", "Indian"], correct: 1 },
    { question: "How many vowels are in the alphabet?", options: ["3", "5", "7"], correct: 1 },
    { question: "What is 5 × 4?", options: ["15", "20", "25"], correct: 1 }
];

// Quiz state
let currentQuestion = 0;
let score = 0;

// Display current question and options
function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("questionText").innerText = q.question;
    
    let optionsDiv = document.getElementById("optionsContainer");
    optionsDiv.innerHTML = "";
    
    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

// Check if answer is correct
function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
    }
    nextQuestion();
}

// Move to next question or show score
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Display final score
function showScore() {
    document.getElementById("questionText").innerText = "Quiz Complete!";
    document.getElementById("optionsContainer").innerHTML = "";
    document.getElementById("scoreDisplay").innerText = "Your Score: " + score + " / " + questions.length;
}

// Start quiz
showQuestion();


