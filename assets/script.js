$(document).ready(function () {
    console.log("ready!");
    // create all elements
    const start = document.getElementById("start");
    const quiz = document.getElementById("quiz");
    const question = document.getElementById("question");
    const highscores = document.getElementById("highscores");

    const choiceA = document.getElementById("A");
    const choiceB = document.getElementById("B");
    const choiceC = document.getElementById("C");

    const counter = document.getElementById("counter");

    const time = document.getElementById("clock");

    const progress = document.getElementById("progress");

    const scoreDiv = document.getElementById("score");
    const choice = document.querySelectorAll("li");
    
    
    var questions = [


        {
            questionName: "what does .js stand for?",
            options: ["Python", "JavaScript", "CSS"],
            answer: "JavaScript"
        }
    ]

    $("#start-quiz").on("click", function () {
        console.log("clicked on button");

        var currentQuestion = $("<p></p>").text(questions[0].questionName);

        $("#quiz").append(currentQuestion)
    })


});