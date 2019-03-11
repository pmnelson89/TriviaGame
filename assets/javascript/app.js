//Hide html elements to be shown later
$(".quizPage").hide();
$(".resultPage").hide();
$("#tryAgain").hide();
$("#correctAnswer").hide();

//create variable for question number and right and wrong answers
var qNum = 0;
var right = 0;
var wrong = 0;

//create array of question objects and a variable for the current question being asked
var questions = [
    {quest: "Question 1",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 2",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 3",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 4",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 5",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 6",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 7",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 8",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 9",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    },
    {quest: "Question 10",
     choiceA: "correct",
     choiceB: "incorrect",
     choiceC: "incorrect",
     correct: "A"
    }
];
var currentQuestion = 0;

//create a function to diplay the current question in HTML
function showQuestion(){
    var q = questions[currentQuestion];
    $("#question").html("<p>" + q.quest + "</p>");
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    number = 30;
    run();
}

//show the question page when the 'begin' button is clicked
$("#beginBtn").click(start);

function start(){
    $(".startPage").hide(); //hide the start page
    $(".quizPage").show(); //show the quiz page
    curentQuestion = 0;
    showQuestion(); //display the questions
}

//variables for the timer
var number = 30; //countdown timer
var intervalID; //countdown interval

//run the timer function
function run(){
clearInterval(intervalID);
intervalID = setInterval(decrement, 1000); //count down by 1 sec
}

//makes the timer number decrease each decrement
function decrement(){
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number <= 10 && number > 5){
        $("#timer").css("background-color", "yellow"); //changes the color to yellow when 10 sec left
    } else if (number <= 5 && number > 0){
        $("#timer").css("background-color", "red"); //changes the color to red when 5sec left
    } else if (number === 0){ //stops the counter and scores the question as wrong
        stop();
        wrong++;
        qNum++;
        console.log(wrong);
        timeUp();
    }
}

//create a function to check the user answer agains the correct answer
function check(answer){
    if(answer == questions[currentQuestion].correct){
        right++; 
        qNum++;
        console.log("right: " + right); 
        rightAnswer(); //run the rightAnswer function
    }else{
        wrong++;
        qNum++;
        console.log("wrong: " + wrong);
        wrongAnswer(); //run the wrong answer function
    }
    if(currentQuestion < questions.length-1){
        currentQuestion++;
        showQuestion();
    }else{
        endGame();
    }
}

function stop(){
    clearInterval(intervalID);
}

//function to display the right answer screen
function rightAnswer(){
    $(".quizPage").hide(); //hide the quiz page
    $(".resultPage").show(); //display the result page
    $("#result").text("That is correct!");
    $("#scoreText").text(right + "/" + qNum);
}

//function to display the wrong answer screen
function wrongAnswer(){
    //$(".quizPage").hide();
    $(".resultPage").show();
    $("#result").text("That is incorrect");
    $("#correctAnswer").show();
    $("#showAnswer").text();
    $("#scoreText").text(right + "/" + qNum);
}

//function to display the time out screen
function timeUp(){
    //$(".quizPage").hide();
    $(".resultPage").show();
    $("#result").text("Time's Up!");
    $("#correctAnswer").show();
    $("#showAnswer").text();
    $("#scoreText").text(right + "/" + qNum);
}

//function to display the end game screen
function endGame(){
    //$(".quizPage").hide(); //hide the quiz page
    $(".resultPage").show(); //display the result page
    $("#result").text("Game Over");
    $("#scoreText").text(right + "/" + qNum);
    $("#tryAgain").show();
}




