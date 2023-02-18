let playerWins = 0;
let computerWins = 0;

// const buttons = document.querySelectorAll(".btn");
// console.log(document.querySelector(".btn"));

// buttons.forEach((button) => button.addEventListener("click", startGame));

// function startGame(e) {
//     let playerSelection = e.target.name;
//     let computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
// }

document.addEventListener("click", (e) => {
    console.log(e.target.name);
    let playerSelection = e.target.name;
    let computerSelection = getComputerChoice();
    // console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});

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

// Compare the user's and computer's selections
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let displayResult = document.getElementById("result");
    let playerScore = document.getElementById("playerScore");
    let computerScore = document.getElementById("computerScore");

    if (playerWins < 5 && computerWins < 5) {
        if (playerSelection === computerSelection) {
            displayResult.innerText = "This round is a tie";
            playerScore.innerText = `${playerWins}`;
            computerScore.innerText = `${computerWins}`;


        } else if (playerSelection === "rock" && computerSelection === "scissors" 
            || playerSelection === "paper" && computerSelection === "rock" 
            || playerSelection === "scissors" && computerSelection === "paper") {
            displayResult.innerText = "You win this round!";
            playerWins++;
            playerScore.innerText = `${playerWins}`;
            computerScore.innerText = `${computerWins}`;
    
        } else if (playerSelection === "rock" && computerSelection === "paper"
            || playerSelection === "paper" && computerSelection === "scissors"
            || playerSelection === "scissors" && computerSelection === "rock") {
            displayResult.innerText = "You lose this round";
            computerWins++;
            playerScore.innerText = `${playerWins}`;
            computerScore.innerText = `${computerWins}`;
    
        } else {
            alert("You entered an invalid response");
        }
    } 
    
        if (playerWins === 5) {
            playerScore.innerText = `${playerWins}`;
            alert("You win!");
            playerWins = 0;
            computerWins = 0;
        } else if (computerWins === 5) {
            computerScore.innerText = `${computerWins}`;
            alert("You lose");
            playerWins = 0;
            computerWins = 0;
        }
}
