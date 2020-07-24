$(document).ready(function () {
    console.log("ready!");
    // create all elements
    
    const startBtn = $("#startBtn");
    const introSection = $("#introSection");
    const questionSection = $("#questionSection");
    const highScoreSection = $("#highScore");
    const highScoreButton = $("#highScoreButton");
    const clickAnswer = $(".clickAnswer");

    let highScoreForm = $(".highScoreForm");
    let initialsText = $("#initialsText");
    let initialForm = $("#initialForm");
    let scoreCount = $("#scoreCount");
    let initialsInput = $("#initialsInput");

    let correctAlert = $(".correctAlert");
    let incorrectAlert = $(".incorrectAlert");

    let optionA = $("#optionA");
    let optionB = $("#optionB");
    let optionC = $("#optionC");
    let optionD = $("#optionD");
    let questionText = $("#questionText");

    // Questions
    let quizObject = [{
            question: "What ssors running in parallel?",
            answerA: "A. PlayStation",
            answerB: "B. Atari",
            answerC: "C. Nintendo",
            answerD: "D. Microsoft",
            correctAnswer: "B. Atari",
        },
        {
            question: "This is question number two",
            answerA: "A. This is option A",
            answerB: "B. This is option B",
            answerC: "C. This is option C",
            answerD: "D. This is option D",
            correctAnswer: "C",
        },
        {
            question: "This is question number three",
            answerA: "A. This is option A",
            answerB: "B. This is option B",
            answerC: "C. This is option C",
            answerD: "D. This is option D",
            correctAnswer: "A",
        },
        {
            question: "This is question number four",
            answerA: "A. This is option A",
            answerB: "B. This is option B",
            answerC: "C. This is option C",
            answerD: "D. This is option D",
            correctAnswer: "B",
        },
        {
            question: "This is question number five",
            answerA: "A. This is option A",
            answerB: "B. This is option B",
            answerC: "C. This is option C",
            answerD: "D. This is option D",
            correctAnswer: "D",
        }
    ]


    //  $("#start-quiz").on("click", function () {
    //      console.log("clicked on button");

    //       var currentQuestion = $("<p></p>").text(questions[0].questionName);

    //      $("#quiz").append(currentQuestion)
    //   })


});