//Hide html elements to be shown later
$(".quizPage").hide();
$(".resultPage").hide();
$("#tryAgain").hide();

//variables for question number and right and wrong answers
var qNum = 0;
var right = 0;
var wrong = 0;

//create array of question objects and a variable for the current question being asked
var questions = [
    {quest: "What was the first national park in America?",
     choiceA: "Yellowstone National Park",
     choiceB: "Yosemite National Park",
     choiceC: "Acadia National Park",
     correct: "A"
    },
    {quest: "What state contains the most national parks?",
     choiceA: "Alaska",
     choiceB: "California",
     choiceC: "Texas",
     correct: "B"
    },
    {quest: "What is the most visited national park?",
     choiceA: "Grand Canyon National Park",
     choiceB: "Great Smoky Mountains National Park",
     choiceC: "Rocky Mountain National Park",
     correct: "B"
    },
    {quest: "What is the least visited national park",
     choiceA: "Dry Tortugas National Park",
     choiceB: "Death Valley National Park",
     choiceC: "Isle Royale National Park",
     correct: "C"
    },
    {quest: "Appalachian National Scenic Trail passes through how many states?",
     choiceA: "Seven",
     choiceB: "Twelve",
     choiceC: "Fourteen",
     correct: "C"
    },
    {quest: "What national park is home to the famous rock formation 'El Capitan'?",
     choiceA: "Yosemite National Park",
     choiceB: "Zion National Park",
     choiceC: "Big Bend National Park",
     correct: "A"
    },
    {quest: "Who is considered 'The Father of the National Parks'?",
     choiceA: "John Muir",
     choiceB: "Theodore Roosevelt",
     choiceC: "Aldo Leopold",
     correct: "A"
    },
    {quest: "What is the smallest national park?",
     choiceA: "Congaree National Park",
     choiceB: "Gateway Arch National Park",
     choiceC: "Hot Springs National Park",
     correct: "B"
    },
    {quest: "How many protected areas are designated as national parks?",
     choiceA: "61",
     choiceB: "108",
     choiceC: "49",
     correct: "A"
    },
    {quest: "What is the largest national park?",
     choiceA: "Denali National Park",
     choiceB: "Glacier National Park",
     choiceC: "Wrangell-St. Elias National Park",
     correct: "C"
    }
];
var currentQuestion = 0;

//function to diplay the current question in HTML
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

//pulls up the quiz page and begins calling questions
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
    if (number > 10){
        $("#timer").css("color", "darkgoldenrod"); //sets background color to clear
    } else if (number <= 10 && number > 5){
        $("#timer").css("color", "yellow"); //changes the color to yellow when 10 sec left
    } else if (number <= 5 && number > 0){
        $("#timer").css("color", "red"); //changes the color to red when 5sec left
    } else if (number === 0){ //stops the counter and scores the question as wrong
        stop();
        wrong++;
        qNum++;
        $("#result").text("Time's Up!"); //alerts that time is up
        $("#correctAnswer").text("The correct answer is: "); //shows the correct answer
        $("#scoreText").text(right + "/" + qNum); //shows the current score
        results(); //displays the results page
        nextQ();
    }
}

//function to end the countdown timer
function stop(){ 
    clearInterval(intervalID);
}

//function to check the user answer agains the correct answer
function check(answer){
    if(answer == questions[currentQuestion].correct){ //if the user clicks the correct answer
        right++; 
        qNum++;
        $("#result").text("That is correct!"); //alerts correct
        $("#scoreText").text(right + "/" + qNum); //shows the score
        console.log("right: " + right); 
        results(); //displays the result page
        nextQ();
    }else{
        wrong++;
        qNum++;
        $("#result").text("That is incorrect"); //alerts incorect
        $("#correctAnswer").text("The correct answer is: " + answer) //shows the correct answer
        $("#scoreText").text(right + "/" + qNum); //shows the score
        console.log("wrong: " + wrong);
        results(); //displays the result page
        nextQ();
    }
}

//function to display the results screen
function results(){
    $(".quizPage").hide(); //hide the quiz page
    $(".resultPage").show(); //display the result page
    $(".resultPage").hide(5000);
    $(".quizPage").show(5000);
}

//function to display the end game screen
function endGame(){
    //$(".quizPage").hide(); //hide the quiz page
    $(".resultPage").show(); //display the result page
    $("#result").text("Game Over"); //
    $("#scoreText").text(right + "/" + qNum);
    $("#tryAgain").show();
    stop();
}

//click event to restart the game
$("#tryAgain").click(start);

//function to bring up the next question
function nextQ(){
    if(currentQuestion < questions.length-1){ //continues the game if there are questions left
        currentQuestion++;
        showQuestion();
    }else{
        endGame(); //ends the game if there are no questions left
    }
}





