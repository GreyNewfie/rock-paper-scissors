// Ask the user to chose rock, paper or scissors
const playerSelection = prompt("Chose rock, paper, or scissors: ");
console.log(playerSelection);

// Calculate the computer's random choice
const computerSelection = getComputerChoice();
console.log(computerSelection);

//Starts a game of 5 rounds
game(playerSelection, computerSelection);

// Generates a random number from 1 to 3 and assigns rock, paper or scissors based on the number
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomChoice;

    if (randomNumber === 1) {
        randomChoice = "rock";
    } else if (randomNumber === 2) {
        randomChoice = "paper";
    } else {
        randomChoice = "scissors";
    }

    return randomChoice;
}

// Play a game of 5 rounds, and anounce the winner of the game after 5 rounds.
function game(playerSelection, computerSelection) {  
    
    let playerWins = 0;
    let computerWins = 0;

    for (i = 1; i <= 5; i++) { 
       let roundWinner = playRound(playerSelection, computerSelection);
       if (roundWinner === "player") {
            playerWins++;
       } else if (roundWinner === "computer") {
            computerWins++;
       }

       playerSelection = prompt("Chose rock, paper, or scissors: ");
       computerSelection = getComputerChoice();
    }

    return playerWins > computerWins ? alert("You won the game!")
         : computerWins > playerWins ? alert("You lost the game")
         : alert("It's a tie game")
}

// Compare the user's and computer's selections
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let wonRound;

    if (playerChoice === computerSelection) {
        alert("This round is a tie");

    } else if (playerChoice === "rock" && computerSelection === "scissors" 
        || playerChoice === "paper" && computerSelection === "rock" 
        || playerChoice === "scissors" && computerSelection === "paper") {
        alert("You win this round!");
        winner = "player";

    } else if (playerChoice === "rock" && computerSelection === "paper"
        || playerChoice === "paper" && computerSelection === "scissors"
        || playerChoice === "scissors" && computerSelection === "rock") {
        alert("You lose this round");
        winner = "computer";

    } else {
        alert("You entered an invalid response");
    }

    return winner;
}
