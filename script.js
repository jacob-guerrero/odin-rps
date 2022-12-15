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
        updateTextScoreTie();
        return "It's a tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
                (playerSelection == "paper" && computerSelection == "rock") || 
                (playerSelection == "scissors" && computerSelection == "paper")) {
                    playerPoints += 1;
                    
                    updateTextScoreWin();
                    return `You Win!, ${playerSelection} beats ${computerSelection}`;
    } else {
        computerPoints += 1;

        updateTextScoreLose();
        return `You Lose!, ${computerSelection} beats ${playerSelection}`;
    }
}

function updateComputerChoice() {
    computerSelection = getComputerChoice();
}

/* function updatePlayerSelection() {
    playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
} */

/* function playGame() {
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
        console.log(`You are the Loser! ${playerPoints}-${computerPoints}`);
    }
} */


const buttons = document.querySelectorAll('#container button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        /* console.log(button.id); */
        playerSelection = button.id;
        updateComputerChoice();

        console.log (playRound(playerSelection, computerSelection));
        console.log (playerPoints, computerPoints);
        updateScore();

        if (playerPoints === 5 || computerPoints === 5) {
            setResult();
            endGame();
        }
    });
});

function newGame() {
    buttons.forEach(elem => {
        elem.classList.remove('block');
        elem.disabled = false;
    });

    playerPoints = 0;
    computerPoints = 0;
    updateScore();

    textScore.textContent = 'Start Now!';

    const resultDiv = document.querySelector('#result');
    while (resultDiv.firstChild) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
}

function endGame() {
    buttons.forEach(elem => {
        elem.disabled = true;
        elem.classList.add('block');
    });

    const newButton = document.createElement('button');
    newButton.textContent = "¡Play Again!";
    document.querySelector('#result').appendChild(newButton);

    newButton.addEventListener('click', newGame);
}

const textScore = document.querySelector('#textScore');

function updateTextScoreTie() {
    textScore.textContent = `It's a tie!`;
}
function updateTextScoreWin() {
    textScore.textContent = `You Win!, ${playerSelection} beats ${computerSelection}`;
}
function updateTextScoreLose() {
    textScore.textContent = `You Lose!, ${computerSelection} beats ${playerSelection}`;
}


function updateScore() {
    const scoreDiv = document.querySelector('#score');
    const points = document.querySelector('#points');

    points.textContent = `${playerPoints} - ${computerPoints}`;
    scoreDiv.insertBefore(points, textScore);
}

function setResult() {
    const resultDiv = document.querySelector('#result');
    const result = document.createElement ('p');

    (playerPoints > computerPoints) ?
    result.textContent = `You are the Winner! ${playerPoints}-${computerPoints}` :
    result.textContent = `You are the Loser! ${playerPoints}-${computerPoints}`;

    resultDiv.appendChild(result);
}


function highlight(e) {
    const button = document.querySelector(`.btn[id='${e.target.id}']`);
    button.classList.add('playing');
  };

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

buttons.forEach((button) => {
    button.addEventListener('click', highlight);
});