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

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
                (playerSelection == "paper" && computerSelection == "rock") || 
                (playerSelection == "scissors" && computerSelection == "paper")) {
                    playerPoints += 1;
                    return `You Win!, ${playerSelection} beats ${computerSelection}`;
    } else {
        computerPoints += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updatePlayerSelection() {
    playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
}

function updateComputerChoice() {
    computerSelection = getComputerChoice();
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        updatePlayerSelection();
        updateComputerChoice();
        console.log (playRound(playerSelection, computerSelection));
    }
    if (playerPoints == computerPoints) {
        console.log("It's a tie!");
    } else if (playerPoints > computerPoints){
        console.log(`You are the Winner! ${playerPoints}-${computerPoints}`);
    } else {
        console.log(`You are the Loser! ${computerPoints}-${playerPoints}`);
    }
}

playGame();