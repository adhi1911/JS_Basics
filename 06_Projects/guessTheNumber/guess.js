// Game state variables
let randomNumber;
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;


// DOM elements
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

// Initialize game
initGame();

function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGuesses = [];
    numGuesses = 1;
    playGame = true;
    console.log(randomNumber); // For debugging purposes
    
    // Reset UI elements
    guessSlot.textContent = "";
    lowOrHi.textContent = "";
    remaining.textContent = "You have 10 guesses left!";
    userInput.disabled = false;
    submit.disabled = false;
    
    // Remove any previously created restart button
    const restartButton = document.getElementById("restart");
    if (restartButton) {
        restartButton.parentNode.removeChild(restartButton);
    }
    
    // Event handler
    submit.addEventListener("click", handleGuess);
}

function handleGuess(event) {
    if (!playGame) return;
    
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number!");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100!");
    } else if (previousGuesses.includes(guess)) {
        alert("You already guessed that number! Try again!");
    } else {
        previousGuesses.push(guess);
        updateGameState(guess);
    }
}

function updateGameState(guess) {
    userInput.value = "";
    guessSlot.textContent += guess + " ";
    numGuesses++;
    
    if (numGuesses > 10) {
        displayMessage(`!!!GAME OVER!!! The number was ${randomNumber}`);
        setMessageStyle("gameOver");
        endGame();
    } else {
        remaining.textContent = `You have ${11 - numGuesses} guesses left!`;
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("Congratulations! You got it right!");
        setMessageStyle("correct");
        endGame();
    } else {
        // Calculate how close the guess is
        const difference = Math.abs(guess - randomNumber);
        const previousGuess = previousGuesses.length > 1 ? previousGuesses[previousGuesses.length - 2] : null;
        const previousDifference = previousGuess !== null ? Math.abs(previousGuess - randomNumber) : null;
        
        let message = "";
        
        // Determine if they're getting closer or further away
        if (previousDifference !== null) {
            if (difference < previousDifference) {
                message = "Getting warmer! ";
            } else if (difference > previousDifference) {
                message = "Getting colder! ";
            }
        }
        
        // Add more specific feedback based on how far off they are
        if (guess < randomNumber) {
            if (difference > 50) {
                message += "Your guess is way too low!";
            } else if (difference > 20) {
                message += "Your guess is too low!";
            } else if (difference > 10) {
                message += "Getting closer, but still a bit low!";
            } else {
                message += "Very close, but still a little low!";
            }
            setMessageStyle("low");
        } else {
            if (difference > 50) {
                message += "Your guess is way too high!";
            } else if (difference > 20) {
                message += "Your guess is too high!";
            } else if (difference > 10) {
                message += "Getting closer, but still a bit high!";
            } else {
                message += "Very close, but still a little high!";
            }
            setMessageStyle("high");
        }
        
        displayMessage(message);
    }
}


function displayMessage(message) {
    lowOrHi.textContent = message;
}

function setMessageStyle(type) {
    // Reset existing styles
    lowOrHi.style.fontSize = "20px";
    lowOrHi.style.fontWeight = "bold";
    lowOrHi.style.padding = "10px";
    lowOrHi.style.borderRadius = "5px";
    lowOrHi.style.textAlign = "center";
    lowOrHi.style.color = "white";
    
    // Apply specific style based on message type
    switch(type) {
        case "correct":
            lowOrHi.style.backgroundColor = "green";
            break;
        case "low":
            lowOrHi.style.backgroundColor = "blue";
            break;
        case "high":
            lowOrHi.style.backgroundColor = "red";
            break;
        case "gameOver":
            lowOrHi.style.backgroundColor = "black";
            break;
    }
}

function endGame() {
    playGame = false;
    userInput.disabled = true;
    submit.disabled = true;
    
    const restartButton = document.createElement("button");
    restartButton.id = "restart";
    restartButton.textContent = "Start New Game";
    restartButton.addEventListener("click", initGame);
    startOver.appendChild(restartButton);
}
