let rounds = 0;
let userScore = 0;
let computerScore = 0;
let userGuesses = [];

function playGame(userChoice) {

    if (rounds >= 5) {
        document.getElementById("winner").textContent =
            "Game over! Please refresh to play again.";
        return;
    }

const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

userGuesses.push(userChoice);

document.getElementById("user-choice").textContent = "You chose: " + userChoice;
document.getElementById("computer-choice").textContent = "Computer chose: " + computerChoice;

let winner = "";

if (userChoice === computerChoice) {
    winner = "Its a tie!";
}
    else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        winner = "You win! Rock crushes scissors.";
        userScore++;
    }
        else if (computerChoice === "paper") {
        winner =  "You Lose! Paper covers rock.";
        computerScore++;
        }
    }

    else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            winner = " You win! Scissors cut paper.";
            userScore++;
        }
        else if (computerChoice === "rock") {
            winner = "You lose! Rock crushes scissors.";
            computerScore++;
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            winner = "You win! Paper cover rock.";
            userScore++;
        }
        else if (computerChoice === "scissors") {
            winner = "You lose! Scissors cut paper.";
            computerScore++;
        }
    }

    rounds++;

    document.getElementById("round-number").textContent = rounds;

    document.getElementById("winner").textContent = winner;


    if (rounds === 5) {
        let finalMessage = `FINAL SCORE - You: ${userScore} | Computer ${computerScore}. `;

        if (userScore > computerScore) {
            finalMessage += "You won the Game!\n\n";
        }
        else if (computerScore > userScore) {
            finalMessage += "You Lost the Game\n\n!";
    }
    else {
        finalMessage += "Its a draw!\n\n";
    }

    finalMessage +="Your guesses were:\n" + userGuesses.join(",");

     setTimeout (() => {
        alert(finalMessage);
     }, 200);
    }
}