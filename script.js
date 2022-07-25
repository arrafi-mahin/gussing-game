"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Game Code here
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

//functions

//modal function
const modal1 = document.querySelector(".modal1");
const greeting = document.querySelector(".greeting");
const overlay = document.querySelector(".overlay");
const modalShow = function (msg1, msg2) {
  document.querySelector(".g-head").textContent = msg1;
  document.querySelector(".g-msg").textContent = msg2;
  greeting.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Modal Close function
const closeModal = function () {
  greeting.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.querySelector(".check").addEventListener("click", function () {
  const cheat = document.querySelector(".guess").value;
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === 54) {
    document.querySelector(".message").textContent = "Hello 🐼";
    document.querySelector(".greeting").style.backgroundColor = "#158467";
    modalShow("Congratulations", "🐼🐼🐼");
    } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    //document.querySelector("#game-field").style.backgroundColor = "#158467";
    document.querySelector(".greeting").style.backgroundColor = "#158467";
    modalShow("Congratulations", "You Win");

    document.addEventListener("keydown", function () {
      if (!modal1.classList.contains("hidden")) {
        closeModal();
      }
    });

    //document.querySelector('.number').style.width = '30rem';
    document.querySelector(".number").textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When Guess Number is Higher
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess Lower...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector("#game-field").style.backgroundColor = "#af2d2d";
      document.querySelector(".score").textContent = 0;

      modalShow("Opps..", "You lost the game.");

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
          closeModal();
        }
      });
    }

    //When Guess Number is Higher
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess Higher...";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "You lost the game.";
      document.querySelector("#game-field").style.backgroundColor = "#af2d2d";
      document.querySelector(".score").textContent = 0;

      modalShow("Opps..", "You lost the game.");

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" || 'click' && !modal1.classList.contains("hidden")) {
          closeModal();
        }
      });
    }
  }
  //document.querySelector('.score').textContent = score;
});

// Again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document
    .querySelector("#game-field")
    .style.removeProperty("background-color");
  document.querySelector(".message").textContent = "Start guessing...";
  //document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

//Modal CLose
