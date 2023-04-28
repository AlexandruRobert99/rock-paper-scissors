const computerSelection = ['rock', 'paper', 'scissors'];
let playerSelection = null;
let playerWonRounds = 0;
let computerWonRounds = 0;
let roundsPlayed = 0;


function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3);
    return computerSelection[randomNumber];
}


function playRound(playerSelection, computerSelection) {
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                return("Tie");
            } else if (computerSelection === "paper"){
                computerWonRounds++;
                return("You Lose! Paper beats Rock");
            } else {
                playerWonRounds++;
                return("You Win! Rock beats Scissors");
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                playerWonRounds++;
                return("You Win! Paper beats Rock");
            } else if (computerSelection === "paper"){
                return("Tie");
            } else {
                computerWonRounds++;
                return("You Lose! Scissors beats Paper");
            }
            break;

        case "scissors":
            if (computerSelection === "rock") {
                computerWonRounds++;
                return("You Lose! Rock beats Scissors");
            } else if (computerSelection === "paper"){
                playerWonRounds++;
                return("You Win! Scissors beats Paper");
            } else {
                return("Tie");
            }
            break;
        default:
            return("You didn't select between rock, paper or scissors.")
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const textPlayerScore = document.querySelector('#player-score');
const textComputerScore = document.querySelector('#computer-score');
const textRoundsPlayed = document.querySelector('#rounds-played');
const textRoundResult = document.createElement('div');
document.body.appendChild(textRoundResult);
const textGameResult = document.createElement('div');
document.body.appendChild(textGameResult);


rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    const computerSelection = getComputerSelection();
    textRoundResult.textContent = playRound(playerSelection, computerSelection);
    textPlayerScore.textContent = playerWonRounds;
    textComputerScore.textContent = computerWonRounds;
    roundsPlayed++;
    textRoundsPlayed.textContent = roundsPlayed;
    game();
});

paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    const computerSelection = getComputerSelection();
    textRoundResult.textContent = playRound(playerSelection, computerSelection);
    textPlayerScore.textContent = playerWonRounds;
    textComputerScore.textContent = computerWonRounds;
    roundsPlayed++;
    textRoundsPlayed.textContent = roundsPlayed;
    game();
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    const computerSelection = getComputerSelection();
    textRoundResult.textContent = playRound(playerSelection, computerSelection);
    textPlayerScore.textContent = playerWonRounds;
    textComputerScore.textContent = computerWonRounds;
    roundsPlayed++;
    textRoundsPlayed.textContent = roundsPlayed;
    game();
});

function resetGame() {
    textPlayerScore.textContent = playerWonRounds;
    textComputerScore.textContent = computerWonRounds;
    playerWonRounds = 0;
    computerWonRounds = 0;
    roundsPlayed = 0;
    
}

function game(numberOfRounds = 5) {
    
    if(roundsPlayed == numberOfRounds){

        if(playerWonRounds > computerWonRounds) {
            textGameResult.style.backgroundColor = "green";
            textGameResult.textContent = "You won the game!";
            resetGame()
        } else if (playerWonRounds === computerWonRounds) {
            textGameResult.style.backgroundColor = "yellow";
            textGameResult.textContent = "The game ended in a draw!";
            resetGame()
        } else {
            textGameResult.style.backgroundColor = "red";
            textGameResult.textContent = "The computer won the game!";
            resetGame()
        }
    } else {
        textGameResult.textContent = '';
    }
    
}
    
game();
