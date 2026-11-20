console.log("Hello World!");

function oneGameRound() {
    let randomNumber = Math.floor(Math.random() * 100);

    let computerChoice;

    if (randomNumber >= 0 && randomNumber < 33) {
        computerChoice = "rock";
    } else if (randomNumber > 33 && randomNumber < 66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    let humanChoice = prompt("Enter your choice.", "").toLowerCase();

    let humanScore, computerScore;
}