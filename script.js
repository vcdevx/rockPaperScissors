//Global variables

const choice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}


//1 round of ROCK PAPER SCISSORS

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        drawCount++;
        console.log("It was a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        console.log("You win! Rock beats Scissors");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        console.log("You win! Scissors beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        console.log("You win! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        console.log("You lose! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        console.log("You lose! Scissors beats Paper");
    } else {
        alert("Please select either rock, paper or scissors!")
    }
}

// TEST PLAYER VS COMPUTER
/* const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */ 

//FULL GAME (5 rounds!)

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors!");
        let computerSelection = computerPlay(); 
        playRound(playerSelection, computerSelection)
    }
        if (playerScore  === computerScore) {
                alert("Game ended in a tie!");
            } else if (playerScore > computerScore) {
                alert("You win the game!");
            } else if (computerScore > playerScore) {
                alert("You lose!");
            }
}

game();