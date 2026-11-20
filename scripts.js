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

    determineRoundWinner(humanChoice, computerChoice);
}

function determineRoundWinner(humanChoice, computerChoice) {
    if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win this round.");
        humanScore++;
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win this round.");
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win this round.");
        humanScore++;
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins this round.");
        computerScore++;
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins this round.");
        computerScore++;
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins this round.");
        computerScore++;
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
    } else if (computerChoice === humanChoice) {
        console.log("Tie!");
        console.log(`Human Score: ${humanScore} & Computer Score: ${computerScore}`);
    }
}

function determineGameWinner() {
    while (humanScore < 5 && computerScore < 5) {
        oneGameRound();
        if (humanScore == 5) {
            console.log("Yay! You Won The GAME.");
        } else if (computerScore == 5) {
            console.log("Yay! Computer Won The GAME.");
        }
    }
}

determineGameWinner();