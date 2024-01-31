var you = "";
var yourScore = 0;
var opponent = "";
var opponentScore = 0;
var winningScore = 10;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if ((you === "rock" && opponent === "scissors") ||
        (you === "scissors" && opponent === "paper") ||
        (you === "paper" && opponent === "rock")) {
        yourScore += 1;
    } else if (you !== opponent) {
        opponentScore += 1;
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;

    if (yourScore === winningScore || opponentScore === winningScore) {
        declareWinner();
    }
}

function declareWinner() {
    if (yourScore === winningScore) {
        alert("Congratulations! You win!");
    } else {
        alert("Opponent wins. Better luck next time!");
    }

    // Reset the game
    yourScore = 0;
    opponentScore = 0;
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}
