'use strict';

let secretNumber = Math.floor(Math.random() * 50) + 1;
let chances = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (chances > highscore) {
      highscore = chances;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (chances > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      chances--;
      document.querySelector('.chances').textContent = chances;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.chances').textContent = 0;
    }
  }

});

document.querySelector('.again').addEventListener('click', function () {
  chances = 5;
  secretNumber = Math.floor(Math.random() * 50) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.chances').textContent = chances;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

});



