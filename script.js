function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            console.log("rock");
            break;
        case 1:
            console.log("paper");
            break;
        case 2:
            console.log("scissors");
            break;
        default:
            console.log("Something went wrong.")
    }
}

getComputerChoice();
