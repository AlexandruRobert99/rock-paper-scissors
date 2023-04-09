let computerSelection = null;

function getComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                return("Tie");
            } else if (computerSelection === "paper"){
                return("You Lose! Paper beats Rock");
            } else {
                return("You Win! Rock beats Scissors");
            }
            break;

        case "paper":
            if (computerSelection === "rock") {
                return("You Win! Paper beats Rock");
            } else if (computerSelection === "paper"){
                return("Tie");
            } else {
                return("You Lose! Scissors beats Paper");
            }
            break;

        case "scissors":
            if (computerSelection === "rock") {
                return("You Lose! Rock beats Scissors");
            } else if (computerSelection === "paper"){
                return("You Win! Scissors beats Paper");
            } else {
                return("Tie");
            }
            break;
        default:
            return("You didn't select between rock, paper or scissors.")
    }
}


const playerSelection = prompt("Choose between rock, paper or scissors: ").toLowerCase();

getComputerSelection(); // The computer gets a random value between "rock", "paper" or "scissors"

console.log("Player selection: " + playerSelection);

console.log("Computer selection: " + computerSelection);

console.log(playRound(playerSelection, computerSelection));