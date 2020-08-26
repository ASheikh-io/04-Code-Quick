$(document).ready(function () {
    
    
    // create all elements
    // const start = document.getElementById("start");
    // const quiz = document.getElementById("quiz");
    // const question = document.getElementById("question");
    // const highscores = document.getElementById("highscores");

    // const choiceA = document.getElementById("A");
    // const choiceB = document.getElementById("B");
    // const choiceC = document.getElementById("C");

    // const counter = document.getElementById("counter");

    // const time = document.getElementById("clock");

    // const progress = document.getElementById("progress");

    // const scoreDiv = document.getElementById("score");
    // const choice = document.querySelectorAll("li");
    
    
    var questions = [


        {
            questionName: "What does .js stand for?",
            options: ["Python", "JavaScript", "CSS"],
            answer: "JavaScript"
        }
    ]

    $("#startBtn").on("click", function () {
        
        var currentQuestion = $("<p></p>").text(questions[0].questionName);

        $("#start-quiz").append(currentQuestion);

        console.log("clicked on button");
    })


});