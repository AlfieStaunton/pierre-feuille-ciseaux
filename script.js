function playGame(userChoice) {
const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

document.getElementById("user-choice").textContent = "You chose: " + userChoice;
document.getElementById("computer-choice").textContent = "Computer chose: " + computerChoice;

let winner = "";

if (userChoice === computerChoice) {
    winner = "Its a tie!";
}
    else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
        winner = "You win! Rock crushes scissors.";
    }
        else if (computerChoice === "paper") {
        winner =  "You Lose! Paper covers rock.";
        }
    }

    else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            winner = " You win! Scissors cut paper.";
        }
        else if (computerChoice === "rock") {
            winner = "You lose! Rock crushes scissors.";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            winner = "You win! Paper cover rock.";
        }
        else if (computerChoice === "scissors") {
            winner = "You lose! Scissors cut paper.";
        }
    }
    else{
        winner = "Invalid choice!";
    }
    document.getElementById("winner").textContent = winner;
    }