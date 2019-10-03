$(document).ready(function() {

var computerChoices = ["R", "P", "S"];
var tie = 0;
var userWins = 0;
var userLoss = 0;
var computerGuess;
var userGuess;
var message = document.getElementById("message")

document.onkeyup = function(event) {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer guess", computerGuess);
  userGuess= event.key.toUpperCase();
    console.log("key pressed", userGuess);
    gameLogic();
}


function gameLogic(){

  if (userGuess === computerGuess){
      tie++;
      message.innerHTML = "THAT'S A TIE!"
      console.log(tie);
  } else if (userGuess === "R" && computerGuess === "S"){
      userWins++;
      console.log(userWins);
      message.innerHTML = "GOOD GUESS!!! THAT'S A WIN!"
  } else if (userGuess === "R" && computerGuess === "P"){
      userLoss++;
      //console.log(userLoss);
      message.innerHTML = "GOOD TRY..... BUT THAT'S A LOSS"
  } else if (userGuess === "S" && computerGuess === "P"){
      userWins++;
      //console.log(userWins);
      message.innerHTML = "GOOD GUESS!!! THAT'S A WIN!"
  } else if(userGuess === "S" && computerGuess === "R"){
      userLoss++;
      //console.log(userLoss);
      message.innerHTML = "GOOD TRY..... BUT THAT'S A LOSS"
  } else if (userGuess === "P" && computerGuess === "S"){
      userLoss++;
     // console.log(userLoss);
     message.innerHTML = "GOOD TRY..... BUT THAT'S A LOSS"
  } else if (userGuess === "P" && computerGuess === "R"){
      userWins++;
      //console.log(userWins);
      message.innerHTML = "GOOD GUESS!!! THAT'S A WIN!"
  } else {
    alert ("Invalid Guess. You have to pick either R, P, or S")
    userGuess=" ";
    computerGuess= " ";
    restartGame();
}

document.getElementById("totalWins").innerHTML = userWins;
document.getElementById("compWins").innerHTML = userLoss;
document.getElementById("tie").innerHTML = tie;
document.getElementById("userKey").innerHTML = userGuess;
document.getElementById("compKey").innerHTML = computerGuess;

timedText();
}

function restartGame(){
    document.getElementById("userKey").innerHTML = "_";
    document.getElementById("compKey").innerHTML = "_";
     
}


function timedText() {
    setTimeout(function(){ 
        $("#message").empty(); }, 2000);   
    }
restartGame(); 
});