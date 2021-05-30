var counter = document.querySelector("#counter");
var startButton = document.querySelector(".start");
var quizNumber = 0, quiz, score, question, choice, choices, selectA, selectB, selectC, selectD, correct =0;
var submitHighScore = document.querySelector(".submitHighScore");
var userScore = score; // Stuck here and trying to fix score display and localStorage
var countdown;
var timeLeft = 100;
var seconds = 60;
//quiz questions
var questions = [
    ["What does a callback function do?","observes an event", "creates GIT issues","passes a function as an argument into a function","nothing","C"],
    ["What does DOM stand for?","Drastic Object Modal","Decided Object Model","Determined Object Modal","Document Object Model","D"],
    ["Which is an API for CSS?","Bootspurs","Bootstrap","Kanbon Board","jQuery","B"],
    ["What is legacy code?","adopted code base you didn't write","code you use everyday","a coder's nightmare","Your favorite code","A"]
];
// when I click the start button then a timer starts and questions presented
startButton.addEventListener("click", function(){
    document.querySelector(".container").getAttribute("style", "display: none;");
    askQuestion();
    countdown(2);
});
// presented with another question after incorrect answer
function _(x) {
return document.getElementById(x);
}
function askQuestion() {
var score=_("score")
if (quizNumber >= questions.length) {
    quizNumber=0;
    correct = 0;
    var counter = document.getElementById("counter");
    counter.innerHTML = "";
    quizEnd();
    return false;
}
_("score").innerHTML = "Question "+(quizNumber)+"of "+questions; 
question = questions[quizNumber][0];
selectA = questions[quizNumber][1];
selectB = questions[quizNumber][2];
selectC = questions[quizNumber][3];
selectD = questions[quizNumber][4];
score.innerHTML = "<h3>"+question+"</h3>";
score.innerHTML += "<input type='radio' name='choices' value='A'> "+selectA+"<br>";
score.innerHTML += "<input type='radio' name='choices' value='B'> "+selectB+"<br>";
score.innerHTML += "<input type='radio' name='choices' value='C'> "+selectC+"<br>";
score.innerHTML += "<input type='radio' name='choices' value='D'> "+selectD+"<br>";
_("score").innerHTML+= "<button onclick='checkAnswer()'>Submit</button>";    
}
//time is subtracted from the clock
function checkAnswer(){
choices = document.getElementsByName("choices");
for(var i=0; i<choices.length; i++) {
    if(choices[i].checked) {
        choice=choices[i].value;
    }
}
if(choice == questions[quizNumber] [5]) {
    correct++;
} 
else{
    seconds -= 10;    
}
quizNumber++;
askQuestion()
}
function countdown(minutes) {
    var mins = minutes
    function tick() {
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
    tick();
}
function timer() {
    timer = setInterval(function(){
        timeLeft--;
        counter.textContent = timeLeft;
    })
};
// game over after questions exhausted
function quizEnd() {
    quiz = _("quiz");
    quiz.innerHTML = "<h2>You got "+correct+ "of "+questions.length+" question right</h2>";
    _("quiz").innerHTML += "Test Complete";
    _("quiz").innerHTML += "<input/><button onclick='submitHighScores()'>Submit</button>";
    quiz = _("quiz");
    quiz.innerHTML =
      "<h2>You got " +
      correct +
      "of " +
      questions.length +
      " question right</h2>";
    _("quiz").innerHTML += "Test Complete";
    _("quiz").innerHTML +=
      "<input/><button onclick='submitHighScores()'>Submit</button>";
    // _("quiz").innerHTML+= "<button onclick='checkAnswer()'>Submit</button>"; 
    // write local storage in submitHigh Scores function - array, loop through array to display scores// 
    var score = function() {
        score = JSON.parse(localStorage.getItem("submitHighScores"));
        // localStorage
        var playerName = prompt("Enter your Name");
        localStorage.setItem("Player Name", playerName);

        localStorage.setItem("userScore", score);
        localStorage.setItem("playerScore", score);
        clearInterval(countdown);
    }
    // FIX This....so difficult
     var score = function () {
     function userScore() {
    score = JSON.stringify(localStorage.setItem("submitHighScores"));
    }}

        // // if nothing in localStorage, create a new object to track all task status arrays
        // if (!score) {
        //   score = {
        //     firstPlace: [],
        //     secondPlace: [],
        //     thirdPlace: [],
        //     fourthPlace: []
        //   };
        // }

        // loop over object properties
        $.each(score, function(list, arr) {
          console.log(list, arr);
          // then loop over sub-array
          arr.forEach(function(score) {
            score(list);
          });
        });
    };
    

    var saveTasks = function() {
        localStorage.setItem("submitHighScore", JSON.stringify(score));
    };
