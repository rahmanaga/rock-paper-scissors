// write a function named getComputerChoice that randomly choose among three choices
function getComputerChoice() {
  let computerChoice;
  const choices = ["rock", "scissors", "paper"];
  let randomNum = Math.floor(Math.random() * 3);
  // Use randomNum to choose among choices using bracket notation and store the value in computerChoice
  computerChoice = choices[randomNum];
  return computerChoice;
}

// Write function named findWinner that takes two parameters(playerChoice , computerChoice)
// and checks if there is a winner or it is a tie
function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It's a tie");
    return;
  } else if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("Player won the round");
      return 0;
    } else if (computerChoice === "paper") {
      console.log("Computer won the round");
      return 1;
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("Player won the round");
      return 0;
    } else if (computerChoice === "rock") {
      console.log("Computer won the round");
      return 1;
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Player won the round");
      return 0;
    } else if (computerChoice === "scissors") {
      console.log("Computer won the round");
      return 1;
    }
  }
}

//Create function named playGame
function playGame() {
  let playerScore = 0,
    computerScore = 0;
  let computerChoice, playerChoice;
  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    playerChoice = prompt(
      "Choose your weapon(rock, scissors or paper)"
    )?.toLowerCase();
    if (playerChoice === null || playerChoice === undefined) {
      break;
    }
    let result = findWinner(playerChoice, computerChoice);
    if (result === 0) {
      playerScore++;
    } else if (result === 1) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("Player won the game! " + playerScore + "-" + computerScore);
  } else if (computerScore > playerScore) {
    console.log("Computer won the game! " + playerScore + "-" + computerScore);
  } else if (playerScore + computerScore < 5) {
    console.log("Cancelled");
  } else {
    console.log("DRAW! " + playerScore + "-" + computerScore);
  }
}

//Call the playGame function
playGame();
