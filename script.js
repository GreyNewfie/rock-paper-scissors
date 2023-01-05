// Ask the user to chose rock, paper or scissors
const playerSelection = prompt("Chose rock, paper, or scissors: ");
console.log(playerSelection);

// Calculate the computer's random choice
const computerSelection = getComputerChoice();
console.log(computerSelection);

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

// Set the round to 1, increment round, end game after 5 rounds

// Compare the user's and computer's selections
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    // If the user's choice is the same as computer's choice output "It's a tie!"
    if (playerChoice === computerSelection) {
        alert("It's a tie");

    // If user's choice is rock and computer's choice is scissors output "You win!"
    } else if (playerChoice === "rock" && computerSelection === "scissors") {
        alert("You win!");

    // If user's choice is rock and computer's choice is paper output "You lose"
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        alert("You lose");
    
    // If user's choice is paper and computer's choice is rock output "You win!"
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        alert("You win!");

    // If user's choice is paper and computer's choice is scissors output "You lose"
    } else if (playerChoice === "paper" && computerSelection === "scissors") {
        alert("You lose");

    // If user's choice is scissors and computer's choice is paper output "You win!"    
    } else if (playerChoice === "scissors" && computerSelection === "paper") {
        alert("You win!");

    // If user's choice is scissors and computer's choice is rock output "You lose"
    } else if (playerChoice === "scissors" && computerSelection === "rock") {
        alert("You lose");
    } else {
        alert("You entered an invalid response");
    }
}
