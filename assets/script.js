// Variables for Timer display area
const containerBox = document.querySelector(".container-box");
const containerLabel = document.querySelector("#container-label");
const timerContainer = document.querySelector("#timer-Container");

// Quiz card elements
const quizBox = document.querySelector(".quiz-box");
const answerList = document.querySelector("#answer-list");
const questionText = document.querySelector(".question-text");
const answerList = answerList.getElementsByTagName("li");
const answerTextArea = answerList.getElementsByTagName("span");
const answerButton = answerList.getElementsByTagName("button");
const questionHeader = document.querySelector(".question-header");

// Welcome card elements
const startBox = document.querySelector(".start-box");

//Score card elements
const qOne = document.querySelector("qOne");
const qTwo = document.querySelector("qTwo");
const qThree = document.querySelector("qThree");
const modalBox = document.querySelector(".modal-box");
const qForm = document.querySelector("#q-form");
const scoreBox = document.querySelector(".score-box");
const highScoreList = document.querySelector("#high-score-list");
const highScoreListItems = highScoreList.getElementsByTagName("li");
const highScoreTextArea = highScoreList.querySelectorAll(".name-score");

// Global variables
let currentAnswer = 0;
let questionIncrement = 0;

let storedHighScores = JSON.parse(localStorage.getItem("highScores"));


// Building the timer
let startTime = 180;
let countDownInterval;

function countDown() {
  countDownInterval = setInterval(function () {
    startTime -= 1;

    // Format the display for minutes and seconds
    let minutes = Math.floor(startTime / 60);
    let seconds = Math.floor(startTime % 60);

    // Add a zero for formatting to double digit display
    if (seconds < 10) {
      timerDisplay.innerHTML = minutes + ":0" + seconds;
    } else {
      timerDisplay.innerHTML = minutes + ":" + seconds;
    }

    // End game when timer reaches 0
    if (startTime < 0) {
      clearInterval(countDownInterval);
      timerDisplay.textContent = "EXPIRED";
      displayBox.setAttribute("class", "wrong-display-box");
      startTime = 0;
      endScreen();
    }
  }, 1000);
}

// *** Quiz Items ***

// Building the question objects array.
const questions = [
  {
    questionNumber: "QuestionOne",
    question: "What is the HTML tag under which one can write the JavaScript code?",
    options: ["<javascript>", "<scripted>", "<script>", "<js>", "All of the above", "None of the above"],
    answer: "3"
  },
  {
    questionNumber: "QuestionTwo",
    question: "Which of the following is the correct syntax to display “JS Code Quiz” in an alert box using JavaScript?",
    options: ["alertbox(“JS Code Quiz”);", " msg(“JS Code Quiz”);", "msgbox(“JS Code Quiz”);", "alert(JS Code Quiz);", "All of the above", "None of the above"],
    answer: "4"
  },
  {
    questionNumber: "QuestionThree",
    question: "Select the correct syntax to create a 'For Loop.'",
    options: ["for i < 5, i++", "for (let i = 0; i < 5; i++)", "for (i < 5; while i = 0)", "for.loop(i < 5, i++)", "All of the above", "None of the above"],
    answer: "1"
  },
  {
    questionNumber: "QuestionFour",
    question: "Arrays in Javascript can be used to store _____.",
    options: ["Numbers", "Strings", "Other Arrays", "Booleans", "All of the above", "None of the above"],
    answer: "4"
  },
  {
    questionNumber: "QuestionFive",
    question: "A very useful tool used during development and debugging for printing content to the debugger is:?",
    options: ["Javascript", "Terminal / Bash", "for loops", "console.log", "All of the above", "None of the above"],
    answer: "4"
  }
];