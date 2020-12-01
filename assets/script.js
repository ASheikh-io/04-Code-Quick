const homeScreen = document.querySelector("#home");
const rules = document.querySelector(".rules");
const startButton = document.getElementById("start-btn");
const quizContainer = document.querySelector(".quiz-container");
const questionText = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const questionHeader = document.querySelector(".question-header");

const displayBox = document.querySelector(".display-box");
const displayLabel = document.querySelector("#display-label");
const timerDisplay = document.querySelector("#timer-display");

let currentQuestion = {};
let acceptingAnswers= true;
let questionCounter = 0;
let availableQuestions = [];

let currentAnswer = 0;
let questionIncrement = 0;

let storedHighScores = JSON.parse(localStorage.getItem("highScores"));

let questions = [{
        questionNumber: "Question One",
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answer: 3,
        choices: [
            "<javascript>",
            "<scripted>",
            "<script>",
            "<js>",
            "All of the above",
            "None of the above"
        ]
    },

    {
        questionNumber: "Question Two",
        question: "Which of the following is the correct syntax to display “JS Code Quiz” in an alert box using JavaScript?",
        answer: 4,
        choices: [
            "alertbox(“JS Code Quiz”);",
            " msg(“JS Code Quiz”);",
            "msgbox(“JS Code Quiz”);",
            "alert(JS Code Quiz);",
            "All of the above",
            "None of the above"
        ],
    },
    {
        questionNumber: "Question Three",
        question: "Select the correct syntax to create a 'For Loop.'",
        answer: 1,
        choices: [
            "for i < 5, i++", 
            "for (let i = 0; i < 5; i++)", 
            "for (i < 5; while i = 0)", 
            "for.loop(i < 5, i++)", 
            "All of the above", 
            "None of the above"],
    },
    {
        questionNumber: "Question Four",
        question: "Arrays in Javascript can be used to store _____.",
        answer: 5,
        choices: [
            "Numbers", 
            "Strings", 
            "Other Arrays", 
            "Booleans", 
            "All of the above", 
            "None of the above"]
    },
    {
        questionNumber: "Question Five",
        question: "A very useful tool used during development and debugging for printing content to the debugger is:?",
        answer: 4,
        choices: [
            "Javascript", 
            "Terminal / Bash", 
            "for loops", 
            "console.log", 
            "All of the above", 
            "None of the above"],
    }
];


// Timer
let startTime = 180;
let countDownInterval;

function startTimer() {
  countDownInterval = setInterval(function () {
    startTime -= 1;

    let minutes = Math.floor(startTime / 60);
    let seconds = Math.floor(startTime % 60);

    if (seconds < 10) {
      timerDisplay.innerHTML = minutes + ":0" + seconds;
    } else {
      timerDisplay.innerHTML = minutes + ":" + seconds;
    }
    if (startTime < 0) {
      clearInterval(countDownInterval);
      timerDisplay.textContent = "EXPIRED";
      displayBox.setAttribute("class", "incorrect");
      startTime = 0;
    }
  }, 1000);
  console.log(countDownInterval);
}


function askQuestions() {

    // Write the question title and actual question
    questionHeader.textContent = questions[questionIncrement].questionNumber;
    questionText.textContent = questions[questionIncrement].question;
  
    // Loop to add the answer options
    for (let x = 0; x < choices.length; x++) {
      choices[x].innerHTML = questions[questionIncrement].choices[x];
    }
    console.log(choices);
  }


// Start Game

function startGame() {
    console.log("clicked")
    homeScreen.setAttribute("class", "hide-card");
    quizContainer.setAttribute("class", "show-card");
    askQuestions();
    startTimer();
}


