alert("You have 30 ")

// timer script

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 30,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};



// Button to play dice 


window.addEventListener( 'DOMContentLoaded', function () {
	
  const buttonRoolDice = document.querySelector( '.dice-roll' );

  function rollDice () {
var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll(".img1")[0];

image1.setAttribute("src", randomImageSource);



// image 2

var randomNumber2 = Math.floor(Math.random() * 3) + 1; //1-6

var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll(".img2")[0];

image2.setAttribute("src", randomImageSource);



// image 3

var randomNumber3 = Math.floor(Math.random() * 3) + 1; //1-6

var randomDiceImage = "dice" + randomNumber3 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image3 = document.querySelectorAll(".img3")[0];

image3.setAttribute("src", randomImageSource);

  

// Result
if (randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3) {
  alert("")
}

else {
  document.querySelector(".dice-roll").innerHTML = "Try again";
}
  }
buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);
