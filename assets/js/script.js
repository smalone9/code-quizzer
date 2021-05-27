  
var quizNumber = 0, quiz, quizScore, question, choice, choices, selectA, selectB, selectC, selectD, correct =0;
var question = [
    ["What does a callback function do?","observes an event", "creates GIT issues","passes a function as an argument into a function","nothing","C"],
    ["What does DOM stand for?","Drastic Object Modal","Decided Object Model","Determined Object Modal","Document Object Model","D"],
    ["Which is an API for CSS?","Bootspurs","Bootstrap","Kanbon Board","jQuery","B"],
    ["What is legacy code?","adopted code base you didn't write","code you use everyday","a coder's nightmare","Your favorite code","A"]
];
function _(x) {
return document.getElementById(x);
}
function askQuestion() {
quiz = _("quiz");
var quizScore=_("quizScore")
if (quizNumber >= question.length) {
    quiz.innerHTML = "<h2>You got "+correct+ "of "+question.length+" question right</h2>";
    _("quizScore").innerHTML = "Test Complete";
    quizNumber=0;
    correct = 0;
    return false;
    
}
_("quizScore").innerHTML = "Question "+(quizNumber)+"of "+question; question = question[quizNumber] [0];
selectA = question[quizNumber][1];
selectB = question[quizNumber][2];
selectC = question[quizNumber][3];
selectD = question[quizNumber][4];

quizScore.innerHTML = "<h3>"+question+"</h3>";
quizScore.innerHTML += "<input type='radio' name='choices' value='A'> "+selectA+"<br>";
quizScore.innerHTML += "<input type='radio' name='choices' value='B'> "+selectB+"<br>";
quizScore.innerHTML += "<input type='radio' name='choices' value='C'> "+selectC+"<br>";
quizScore.innerHTML += "<input type='radio' name='choices' value='D'> "+selectD+"<br>";



}
function checkAnswer(){
choices = document.getElementsByName("choices");
for(var i=0; i<choices.length; i++) {
    if(choices[i].checked) {
        choice=choices[i].value;
    }
}
if(choice == question[quizNumber] [5]) {
    correct++;

} 
quizNumber++;
askQuestion()

function countdown(minutes) {
    var seconds = 60;
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
}
_("quiz").innerHTML+= "<button onclick='checkAnswer()'>Submit</button>";




window.addEventListener("load", askQuestion, false);