const startButton = document.querySelector("#start-button");
const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const score = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers= true;
// let score = 0;
let questionsCounter = 0;
let availableQuestions = [];

let questions = [{
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

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

// Start Game
function startGame() {
    startButton.onClick = () => {
        console.log("clicked");
    }
}


