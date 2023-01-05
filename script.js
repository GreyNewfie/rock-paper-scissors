// Ask the user to chose rock, paper or scissors
const playerSelection = prompt("Chose rock, paper, or scissors: ");
console.log(playerSelection);

// Calculate the computer's random choice
const computerChoice = getComputerChoice();
console.log(computerChoice);

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
// If the user's choice is the same as computer's choice output "It's a tie!"
// If user's choice is rock and computer's choice is scissors output "You win!"
// If user's choice is rock and computer's choice is paper output "You lose"
// If user's choice is paper and computer's choice is rock output "You win!"
// If user's choice is paper and computer's choice is scissors output "You lose"
// If user's choice is scissors and computer's choice is paper output "You win!"
// If user's choice is scissors and computer's choice is rock output "You lose"
