let playerScore = 0,
  computerScore = 0;
// write a function named getComputerChoice that randomly choose among three choices
function getComputerChoice() {
  let computerChoice;
  const choices = ["rock", "scissors", "paper"];
  let randomNum = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNum];
  return computerChoice;
}

// Write function named findWinner that takes two parameters(playerChoice , computerChoice)
// and checks if there is a winner or it is a tie
function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    displayOutput("It's a tie!");
    return;
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      playerScore++;
      displayOutput("Player won the round!");
      return;
    } else if (computerChoice === "paper") {
      computerScore++;
      displayOutput("Computer won the round!");
      return;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      playerScore++;
      displayOutput("Player won the round!");
      return;
    } else if (computerChoice === "rock") {
      computerScore++;
      displayOutput("Computer won the round!");
      return;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      playerScore++;
      displayOutput("Player won the round!");
      return;
    } else if (computerChoice === "scissors") {
      computerScore++;
      displayOutput("Computer won the round!");
      return;
    }
  }
}

//Create function named playRound
function playRound(e) {
  let computerChoice, playerChoice;
  computerChoice = getComputerChoice();
  playerChoice = e.target.id;
  findWinner(playerChoice, computerChoice);
  if (playerScore === 5) {
    displayOutput("Player won the game!");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    displayOutput("Computer won the game!");
    playerScore = 0;
    computerScore = 0;
  }
}

const choices = document.querySelectorAll(".choice");
const output = document.querySelector(".output");

choices.forEach((choice) => {
  choice.addEventListener("click", playRound);
});

function getParagraph(text, classname) {
  const para = document.createElement("p");
  para.textContent = text;
  para.classList.add(classname);
  return para;
}

function displayOutput(message) {
  const hasChild = output.childElementCount;
  if (hasChild === 2) {
    output.removeChild(output.firstElementChild);
    output.removeChild(output.firstElementChild);
  }
  const paraScore = getParagraph(
    `Player ${playerScore} - ${computerScore} Computer`,
    "outputScore"
  );
  output.appendChild(paraScore);
  const paraText = getParagraph(`${message}`, "outputText");
  output.appendChild(paraText);
}
