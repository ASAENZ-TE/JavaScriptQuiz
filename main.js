var startBtn = document.querySelector("#beginTestbtn");
var quizDiv = document.querySelector("#quiz");
var newArea = document.querySelector("#newStuffDiv");
var timerSpot = document.querySelector("#timerSpot");
var questionsIndex = 0;
var secondsLeft = 120;
var score = 0;


//clearArea ();

function clearArea() {
    quizDiv.innerHTML = "";
    timerF();
    qCreator();
}

function qCreator() {

    var title = document.createElement("h3");
    title.innerText = questions[questionsIndex].title;
    quizDiv.appendChild(title);

    var btns = document.createElement("div");
    for (var i = 0; i < questions[questionsIndex].choices.length; i++) {
        //console.log(questions[questionsIndex].choices[i]);

        var qButtons = document.createElement("button");
        qButtons.innerText = questions[questionsIndex].choices[i];
        quizDiv.appendChild(qButtons);

        qButtons.addEventListener("click", function(event) {
            // this one does need the parentheses after because it needs to know its a function, 
            //when it doesn't it just needs a reference to the function that's been established 
            //somewhere else
            console.log(event.target.textContent);
            console.log(questions[questionsIndex].answer);

            if (i <= questions[questionsIndex].choices.length-1 || secondsLeft === 0) {
                clearInterval(timerInterval);
                highScore();
                return;
            } else {
                if (questions[questionsIndex].answer == event.target.textContent.toString()) {
                    alert("Correct!")
                    questionsIndex++;
                    score += 20;
                    clearArea();
                } else {
                    alert("Nope!")
                    questionsIndex++;
                    secondsLeft -= 10;
                    clearArea();
                }
            }
            

        });
    // add all buttons to a container, add container to the for loop
    }
}


function timerF () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerSpot.textContent = secondsLeft + " seconds left till time's out!";
        console.log(secondsLeft);
        if(secondsLeft <= 0) {
          clearInterval(timerInterval);
          highScore();
        }
    
      }, 1000);
    }



function highScore () {

    
    quizDiv.innerHTML = "";
    localStorage.setItem("gScore", score);
    var sDiv = document.createElement("div");
    sDiv.innerText = "Well done! Your score was: " + localStorage.getItem("gScore", score) + "!     ";
    
    quizDiv.appendChild(sDiv);
    
    
    var ssBtn = document.createElement("button");
    ssBtn.setAttribute("id", "saveButton");
    ssBtn.innerText = "Save Score?";
    
    sDiv.appendChild(ssBtn); 
    
    var sInput = document.createElement("input");
    sInput.setAttribute("id", "saveInput");
    
    sDiv.appendChild(sInput); 
    
    ssBtn.addEventListener("click", saveScore);
}

function saveScore () {
    var initials = document.querySelector("#saveInput").value.trim();
    console.log(initials);
    console.log(score);
    
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    var newScore = {
       score : score,
       initials : initials,
    }
    
    highscores.push(newScore);

    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    
    highscores.forEach(function(score){
        var hsDiv = document.createElement("div");
        hsDiv.innerText = "High Scores:" + JSON.stringify(highscores);
       
        
        quizDiv.appendChild(hsDiv);
    });
}




// loop through & create buttons, set attribute to set value of the button, 
//update the text content with the value of the choice, button value = choice, 
// <button> choice <button>, on click to each of the buttons, on click is a function 
//to see if the button selected was right or wrong, by checking it against answer 


//  question index ++ after 

//start quiz function
// question click function
// check answer function index ++ quiz over?  checks answer
// end quiz function
// timer function 
// score function 

// parameters in parentheses are click and the function reference
startBtn.addEventListener("click", clearArea);
