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
var q;

//function to set variables to default
function reset(){
    qNum = 0;
    right = 0;
    wrong = 0;
    currentQuestion = 0;
}

//variables for the timer
var number = 30; 
var intervalID; 

//run the timer function
function run(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000); 
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
        $("#result").css("color", "red"); 
        $("#correctAnswer").text("The correct answer is: " + q["choice" + q.correct]); 
        $("#correctAnswer").show();
        $("#scoreText").text(right + "/" + qNum); 
        results(); 
    }
}

//function to end the countdown timer
function stop(){ 
    clearInterval(intervalID);
}

//show the question page when the 'begin' button is clicked
$("#beginBtn").click(start);

//pulls up the quiz page and begins calling questions
function start(){
    reset();
    $(".startPage").hide(); 
    $(".quizPage").show(); 
    $("#tryAgain").hide();
    showQuestion(); 
}

//function to diplay the current question in HTML
function showQuestion(){
    $("#timer").html("<h2>" + number + "</h2>");
    number = 30;
    $(".quizPage").show();
    $(".resultPage").hide();
    q = questions[currentQuestion];
    $("#question").html("<p>" + q.quest + "</p>");
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    run();
}

//function to check the user answer against the correct answer
function check(answer){
    stop();
    if(answer == questions[currentQuestion].correct){ 
        right++; 
        qNum++;
        $("#result").text("That is correct!"); 
        $("#result").css("color", "greenyellow");
        $("#scoreText").text(right + "/" + qNum);
        $("#scoreText").css("color", "white"); 
        $("#correctAnswer").hide();
        console.log("right: " + right); 
        results(); 
    }else{
        wrong++;
        qNum++;
        $("#result").text("That is incorrect"); 
        $("#result").css("color", "red");
        $("#correctAnswer").text("The correct answer is: " + q["choice"+ q.correct]);
        $("#correctAnswer").show(); 
        $("#scoreText").text(right + "/" + qNum);
        console.log("wrong: " + wrong);
        results(); 
    }
}

//function to determine if a question, or the end game screen appears
function nextQ(){
    currentQuestion++;
    if(currentQuestion <= questions.length-1){ 
        number = 30;
        showQuestion();
    }else{
        endGame(); 
    }
}

//function to display the results screen
function results(){
    $(".quizPage").hide(); 
    $(".resultPage").show(); 
    setTimeout(function(){ 
        nextQ();
      }, 3000);
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







