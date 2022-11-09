function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a draw!");
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        console.log(`You Win!, ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function updatePlayerSelection() {
    playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
}

function updateComputerChoice() {
    computerSelection = getComputerChoice();
}

function game() {
    for (let i = 0; i < 5; i++) {
        updatePlayerSelection();
        updateComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();