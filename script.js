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

let btnRock = document.getElementById("btnRock");
let btnPaper = document.getElementById("btnPaper");
let btnScissors = document.getElementById("btnScissors");
let playerSelection = "";


btnRock.addEventListener("click", function(){
    playRound("rock", computerPlay());
});

btnPaper.addEventListener("click", function(){
    playRound("paper", computerPlay());
});

btnScissors.addEventListener("click", function(){
    playRound("scissors", computerPlay());
});

function reset() {
    document.getElementById("btnReset").style.visibility = "hidden";
    document.getElementById("resultsText").style.visibility = "hidden";
    playerScore = 0;
    computerScore = 0;
    drawCount = 0;
}
let btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", function(){
    reset();
});
//1 round of ROCK PAPER SCISSORS

function playRound(playerSelection, computerSelection) {
    document.getElementById("playerScoreCount").innerText= playerScore;
    document.getElementById("computerScoreCount").innerText= computerScore;
    document.getElementById("resultsText").style.visibility = "visible";
    if (playerScore === 5) {
        console.log("Player wins the game!")
        document.getElementById("resultsText").textContent = "Player wins the game!";
        document.getElementById("btnReset").style.visibility = "visible";
    } else if (computerScore === 5) {
        console.log("Computer wins the game!")
        document.getElementById("resultsText").textContent = "Computer wins the game!";
        document.getElementById("btnReset").style.visibility = "visible";
    } else if (playerSelection === computerSelection) {
        drawCount++;
        console.log("It was a tie!");
        document.getElementById("resultsText").textContent = "It was a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        console.log("You win! Rock beats Scissors");
        document.getElementById("resultsText").textContent = "You win! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        console.log("You win! Scissors beats Paper");
        document.getElementById("resultsText").textContent = "You win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        console.log("You win! Paper beats Rock");
        document.getElementById("resultsText").textContent = "You win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        console.log("You lose! Paper beats Rock");
        document.getElementById("resultsText").textContent = "You lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        console.log("You lose! Rock beats Scissors");
        document.getElementById("resultsText").textContent = "You lose! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        console.log("You lose! Scissors beats Paper");
        document.getElementById("resultsText").textContent = "You lose! Scissors beats Paper";
    } else {
        console.log("Please select either rock, paper or scissors!")
    }
}

// TEST PLAYER VS COMPUTER
/* const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */ 

//FULL GAME (5 rounds!)

/*function game() {
    for (let i = 0; i < 5; i++) {
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

game();*/