var submit = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");
var msgDiv = document.querySelector("#msg");
var highScoreSpan = document.querySelector("#initialsSpan");
var highScoreList = document.querySelector("#highScoreList");

var user;
var highScores = [];

 init();

function displayMessage(type , message){
    msgDiv.textContent = message;
    msgDiv.setAttribute("class",type);
}

function renderHighscores(){
highScoreList.innerHTML = "";

for(var i = 0; i < highScores.length; i++){
    var highScore = highScores[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    li.setAttribute("data-index",i);

    highScoreList.appendChild(li);
}};

function init(){
    var storedScores = JSON.parse(localStorage.getItem("user"));

    if(storedScores !== null){
        highScore = storedScores;
    }
    renderHighscores();
}

function storeScores(){
    localStorage.setItem("user", JSON.stringify(highScores));
}


submit.addEventListener("click",function(event){
    event.preventDefault();


   user = initialsInput.value;

   console.log(user);
   
if (user === ""){
    displayMessage("error", "Sorry, initials cannot be left blank...");

}else{
    displayMessage("success", "Congratulations! You've been added to our  hall of fame!");
   
    highScores.push(user);

    storeScores();
    renderHighscores();

   
} 
});