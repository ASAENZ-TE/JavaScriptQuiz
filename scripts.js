var startTime;
var startButton;
var c = "Ding ding ding! That is correct!";
var w = "Sorry, that's wrong...";

var n = 0;
var s = 0;

var seconds;

function begin001() {
  seconds = 75;

  disappear.innerHTML = "";
  disappear1.innerHTML = "";
  disappear2.innerHTML = "";
  title.innerHTML = questions[0];
  option1.innerHTML = a1[0];
  option2.innerHTML = a2[0];
  option3.innerHTML = a3[0];
  option4.innerHTML = a4[0];
}

function q1c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest2()> On to the next one? </button>";
}

function q1w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest2()> On to the next one? </button>";
    seconds = seconds-15;
}

function quest2() {
  title.innerHTML = questions[1];
  option1.innerHTML = a1[1];
  option2.innerHTML = a2[1];
  option3.innerHTML = a3[1];
  option4.innerHTML = a4[1];
  answer.innerHTML = "";
  next1.innerHTML = "";
}

function q2c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest3()> On to the next one? </button>";
}

function q2w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest3()> On to the next one? </button>";
    seconds = seconds-15;
}

function quest3() {
  title.innerHTML = questions[2];
  option1.innerHTML = a1[2];
  option2.innerHTML = a2[2];
  option3.innerHTML = a3[2];
  option4.innerHTML = a4[2];
  answer.innerHTML = "";
  next1.innerHTML = "";
}

function q3c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest4()> On to the next one? </button>";
}

function q3w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest4()> On to the next one? </button>";
    seconds = seconds-15;
}

function quest4() {
  title.innerHTML = questions[3];
  option1.innerHTML = a1[3];
  option2.innerHTML = a2[3];
  option3.innerHTML = a3[3];
  option4.innerHTML = a4[3];
  answer.innerHTML = "";
  next1.innerHTML = "";
}

function q4c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest5()> On to the next one? </button>";
}

function q4w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = quest5()> On to the next one? </button>";
    seconds = seconds-15;
}

function quest5() {
  title.innerHTML = questions[4];
  option1.innerHTML = a1[4];
  option2.innerHTML = a2[4];
  option3.innerHTML = a3[4];
  option4.innerHTML = a4[4];
  answer.innerHTML = "";
  next1.innerHTML = "";
}

function q5c() {
  answer.innerHTML = "<div id = green>" + c + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = window.open('highscores.html')> Let's finish up! </button>";
}

function q5w() {
  answer.innerHTML = "<div id = red>" + w + "</div>";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = window.open('highscores.html')> Let's finish up! </button>";
    seconds = seconds-15;
}

function startTimer(){
    seconds = seconds -1;
    if (seconds < 75){
    time.innerHTML = seconds;
    }
    if (seconds < 1){
        window.clearInterval(update);
        title.innerHTML = "";
option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  option4.innerHTML = "";
  next1.innerHTML =
    "<button class = button is-danger is-rounded nextButton onClick = window.open('highscores.html')> Let's finish up! </button>";
    } 
}
update = setInterval("startTimer()",1000);