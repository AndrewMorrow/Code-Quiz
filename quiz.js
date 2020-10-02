var highScore = 0;
var timeLeft = 50;
var timerInterval;
var correct;
var randomizeQuestions, currentQuestionIndex;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
const timerElement = document.getElementById("timer-nav");
var questionNumber = document.getElementById("question-number");

const quizQuestions = [
    {
        question: "Javascript and Java are both loosely typed languages.",
        answers: [
            { text: "true", correctAnswer: false },
            { text: "false", correctAnswer: true },
        ],
        correctAnswer: "b",
    },
    {
        question: "What elements make up the MERN stack?",
        answers: [
            { text: "Moment.js, Enzyme, React.js, npm", correctAnswer: false },
            {
                text: "MariaDB, ES6, Ruby on Rails, Node.js",
                correctAnswer: false,
            },
            {
                text: "MongoDB, Express, React.js, Node.js",
                correctAnswer: true,
            },
            { text: "MongoDB, EsLint, Redux, Nim", correctAnswer: false },
        ],
    },
    {
        question: "What is the state a button is in right after it is clicked",
        answers: [
            { text: "hover", correctAnswer: false },
            { text: "active", correctAnswer: true },
            { text: "visited", correctAnswer: false },
            { text: "click", correctAnswer: false },
        ],
    },
    {
        question:
            "Bootstrap is a JavaScript library used to make styling easier.",
        answers: [
            { text: "true", correctAnswer: false },
            { text: "false", correctAnswer: true },
        ],
    },
    {
        question:
            "Which of these is used to make sure your JavaScript code is following proper syntax?",
        answers: [
            { text: "Express", correctAnswer: false },
            { text: "EsLint", correctAnswer: true },
            { text: "TypeScript", correctAnswer: false },
            { text: "Handlebars.js", correctAnswer: false },
        ],
    },
];

startQuiz();

function startQuiz() {
    randomizeQuestions = quizQuestions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    displayCurrentQuestion(randomizeQuestions[currentQuestionIndex]);
}

function displayCurrentQuestion(question) {
    // this checks to see if the quiz is over and then stores the current score in mostRecentScore value
    if (randomizeQuestions.length === 0 || questionsCounter > maxQuestions) {
        localStorage.setItem("mostRecentScore", score);

        return window.location.assign("/highScore.html");
    }
    // sets the question text in the HTML
    questionElement.innerText = question.question;
    currentQuestionIndex++;
    // displays question number at the top
    questionNumber.textContent = `Question ${currentQuestionIndex} of ${randomizeQuestions.length}`;
    // this creates a button element for each answer
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn, btn-primary, btn-lg, mr-2, mb-2");
        // sets the dataset for the button if its the correct answer
        if (answer.correctAnswer) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", answerSelect);
        answerButtonsElement.appendChild(button);
    });
}

function answerSelect(e) {
    const selectedAnswer = e.target;
    correct = selectedAnswer.dataset.correct;
}

// call this to remove the set class
function resetClass() {
    setTimeout(function () {
        // remove the correct or incorrect class
        // call displayCurrentQuestion

        // this loops until all button children are removed
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }, 800);
}
