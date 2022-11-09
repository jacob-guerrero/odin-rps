function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        return `You Win!, ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
let playerSelection = "paPEr".toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();


console.log(playRound(playerSelection, computerSelection));

/* let playerSelection = "Rock".toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw!";
    } else {
        return "no";
    }
} */
/* 

console.log (getComputerChoice());
console.log (playerSelection);
console.log (playRound()); */