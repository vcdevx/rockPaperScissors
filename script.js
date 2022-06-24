const choice = ["rock", "paper", "scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It was a tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock";
    }
}

// TEST PLAYER VS COMPUTER
/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */

function game() {
    for (let i = 0; i < 5; i++) {
        
    }
}