function getComputerChoice() {
    return Math.floor(Math.random() * 3);
    
}
let computerChoice;
if (getComputerChoice() == 0) {
    computerChoice = "Rock";
} else if (getComputerChoice() == 1) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}
console.log (computerChoice)