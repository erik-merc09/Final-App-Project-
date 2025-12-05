
let questions = [
    { question: "What is 10 - 3?", options: ["28", "7", "75"], correct: 1 },
    { question: "What is the capital the U.S?", options: ["England", "Washington D.C.", "Toronto"], correct: 1 },
    { question: "What color is the sky in a blood moon?", options: ["Black", "Brown", "Red"], correct: 0 },
    { question: "How many weeks are in a day?", options: ["7", "5", "1/7"], correct: 2 },
    { question: "What is 70 + 3?", options: ["140", "73", "41"], correct: 1 },
    { question: "What is the largets country in the world by land area?", options: ["U.S.A", "Russia", "Mexico", "India"], correct: 1 },
    { question: "What is the oiffical name of Big Ben?", options: [" The Elizabeth Tower", " The Eiffel Tower ", "Burj Khalifa", " Willis Tower"], correct: 0 },
    { question: "Which planet is known as the red planet?", options: ["Super Earth", "Neptune", "Mars", "Pluto"], correct: 2 },
    { question: "What was the name of the Ancient Egyptian Sun God?", options: ["Khonsu", "Cleopatra", "Anubis", "Ra"], correct: 3 },
    { question: "What is 5 x 7 x 3 x 4 x 5 x 1 x 7 x 8 x 0?", options: ["456,067", "0", "752,097,502,367", "117,600"], correct: 1 }
];

// Quiz start
let currentQuestion = 0;
let score = 0;

// show questuion
function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("questionText").innerText = q.question;
    
    let optionsDiv = document.getElementById("optionsContainer");
    optionsDiv.innerHTML = "";
    // AI assisted with this line of code
    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsDiv.appendChild(button);
    });
}

// Check if correct
function checkAnswer(selected) {
    let correct = questions[currentQuestion].correct;
    let feedback = (selected == correct) ? "Correct!" : "Wrong! The answer is: " + questions[currentQuestion].options[correct];
    document.getElementById("scoreDisplay").innerText = feedback;
    setTimeout(nextQuestion, 1000); // Wait 2 seconds before next question
    if (selected == correct) {
        score++;
    }
}

// Move to next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showScore();
    }

}

// Show score
function showScore() {
    document.getElementById("questionText").innerText = "Quiz Done!";
    document.getElementById("optionsContainer").innerHTML = "";
    document.getElementById("scoreDisplay").innerText = "Your Score: " + score + " / " + questions.length;
}

// Start quiz
showQuestion();