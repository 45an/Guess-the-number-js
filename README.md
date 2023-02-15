# Guess the Number Game

This is a simple number guessing game built with JavaScript. 
The game generates a random number between 1 and 50, and the player has to guess the number. 
The player has 5 chances to guess the correct number.

## How to Play

    Enter your guess in the input field and click the "Check" button.
    
    If your guess is correct, you win the game!
    
    If not, You will receive a message telling you if your guess was too high or too low.
    
    Keep guessing until you run out of chances, or until you guess the correct number.
    
    If you want to play again, click the "Again" button.

## Code Explanation

```sh
The game logic is implemented in the script.js file.
The game uses the Math.random() function to generate a random number between 1 and 50,
which is stored in the secretNumber variable.

The game listens for click events on the "Check" and "Again" buttons, using the addEventListener() function.
When the "Check" button is clicked, the game reads the player's guess 
from the input field, using the document.querySelector()function. 
The player's guess is compared to the secret number, and a message is displayed indicating whether 
the guess was correct, too high, or too low.

The game also keeps track of the number of chances the player has left, using the chances variable.
If the player runs out of chances without guessing the correct number, the game is over, and the player loses.

When the game is over, the "Again" button can be clicked to start a new game. 
This resets the chances variable, generates a new random number, and clears the input field and the message display.

The displayMessage() function is used to display messages to the player, 
by updating the text content of a message element in the HTML document.

The highscore variable keeps track of the player's highest score. 
If the player beats their high score, the highscore variable is updated, and the new high score is displayed on the page.

```

- [Click here to Guess The Number](https://45an.github.io/Guess-the-number-js/)

