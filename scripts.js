console.log("Hello World!");

let humanScore = 0, computerScore = 0;

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

    determineWinner(humanChoice, computerChoice);
}

function determineRoundWinner(humanChoice, computerChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win this round.");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win this round.");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win this round.");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins this round.");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins this round.");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins this round.");
        computerScore++;
    } else if (computerChoice === humanChoice) {
        console.log("Tie!");
    }
}