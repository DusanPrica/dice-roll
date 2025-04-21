var randomNumber1 = Math.floor(Math.random() * 6) + 1; // dice 1 -> 6
var diceImage = "dice" + randomNumber1 + ".png"; // dice1.png -> dice6.png
var randomImage = "images/" + diceImage; // images/dice1.png -> images/dice6.png
var leftDice = document.querySelectorAll("img")[0];
leftDice.setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + diceImage;
var rightDice = document.querySelectorAll("img")[1];
rightDice.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {                                // if 1 wins
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {                       // if 2 wins
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw! 🤷🏼‍♂️";            // if draw
  }