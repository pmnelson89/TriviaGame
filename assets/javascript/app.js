//Hide html elements to be shown later
$(".quizPage").hide();
$(".resultPage").hide();
$("#tryAgain").hide();

//variables for question number and right and wrong answers
var qNum = 0;
var right = 0;
var wrong = 0;
var q;

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
    $(".quizPage").show();
    $(".resultPage").hide();
    q = questions[currentQuestion];
    $("#question").html("<p>" + q.quest + "</p>");
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    number = 30;
    run();
}

//pulls up the quiz page and begins calling questions
function start(){
    currentQuestion = 0;
    $(".startPage").hide(); 
    $(".quizPage").show(); 
    showQuestion(); 
}

//function to determin if a question, or the end game screen appears
function nextQ(){
    if(currentQuestion < questions.length-1){ 
        currentQuestion++;
        showQuestion();
    }else{
        endGame(); 
    }
}

//show the question page when the 'begin' button is clicked
$("#beginBtn").click(start);

//variables for the timer
var number = 30; 
var intervalID; 

//run the timer function
function run(){
clearInterval(intervalID);
intervalID = setInterval(decrement, 1000); //count down by 1 sec
$("#timer").html("<h2>" + number + "</h2>");

}


//makes the timer number decrease each decrement
function decrement(){
    $("#timer").html("<h2>" + number + "</h2>");
    number--;
    if (number > 10){
        $("#timer").css("color", "white"); 
    } else if (number <= 10 && number > 5){
        $("#timer").css("color", "yellow"); 
    } else if (number <= 5 && number > 0){
        $("#timer").css("color", "red"); 
    } else if (number === 0){ 
        stop();
        wrong++;
        qNum++;
        $("#result").text("Time's Up!"); 
        $("#correctAnswer").text("The correct answer is: " + q["choice" + q.correct]); 
        $("#scoreText").text(right + "/" + qNum); 
        results(); 
    }
}

//function to end the countdown timer
function stop(){ 
    clearInterval(intervalID);
}

//function to check the user answer agains the correct answer
function check(answer){
    if(answer == questions[currentQuestion].correct){ 
        right++; 
        qNum++;
        $("#result").text("That is correct!"); 
        $("#result").css("color", "greenyellow");
        $("#scoreText").text(right + "/" + qNum);
        $("#scoreText").css("color", "white"); 
        console.log("right: " + right); 
        results(); 
    }else{
        wrong++;
        qNum++;
        $("#result").text("That is incorrect"); 
        $("#result").css("color", "red");
        $("#correctAnswer").text("The correct answer is: " + q["choice"+q.correct]); 
        $("#scoreText").text(right + "/" + qNum);
        console.log("wrong: " + wrong);
        results(); 
    }
}

//function to display the results screen
function results(){
    $(".quizPage").hide(); 
    $(".resultPage").show(); 
    setTimeout(function(){ 
        nextQ();
      }, 1000);
}

//function to display the end game screen
function endGame(){
    stop();
    $(".resultPage").show(); 
    $("#result").text("Game Over");
    $("#result").css("color", "red");
    $("#scoreText").text(right + "/" + qNum);
    $("#tryAgain").show();
}

//click event to restart the game
$("#tryAgain").click(start);







