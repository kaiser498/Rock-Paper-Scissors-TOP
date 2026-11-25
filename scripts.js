console.log("Hello World!");

let humanScore = 0, computerScore = 0, humanChoice = "";


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

function playGame() {
    if (humanScore > computerScore) {
        console.log("Yay! You won the game.");
    } else if (humanScore < computerScore) {
        console.log("Hehehe! Computer won the game.");
    } else {
        console.log("It's a tie.")
    }
}

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    oneGameRound();
});
paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    oneGameRound();
});
scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    oneGameRound();
});

const body = document.body;

body.append(rockBtn, paperBtn, scissorsBtn);