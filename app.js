//write a function named getComputerChoice that randomly choose among three choices
function getComputerChoice() {
  //create variable computerChoice
  let computerChoice;
  //Create a list from three choices and store it in new variable named choices
  const choices = ["rock", "scissors", "paper"];
  // Generate a random number between zero and two(inclusively) and store it in randomNum variable
  let randomNum = Math.floor(Math.random() * 3);
  //Use randomNum to choose among choices using bracket notation and store the value in computerChoice
  computerChoice = choices[randomNum];
  //Return computerChoice from function
  return computerChoice;
}

//Write function named findWinner that takes two parameters(playerChoice , computerChoice)
// and checks if there is a winner or it is a tie
function findWinner(playerChoice, computerChoice) {
  //If playerChoice is equal to computerChoice then display "It is a tie"
  if (playerChoice === computerChoice) {
    console.log("It's a tie");
    return;
  } else if (playerChoice === "rock") {
    //if playerChoice is equal to rock then if computerChoice is to equal to the scissors then
    //display "Player won the round" and return 0
    if (computerChoice === "scissors") {
      console.log("Player won the round");
      return 0;
    } else if (computerChoice === "paper") {
      ////else if computerChoice is equal to paper then display "Computer won this round" and return 1
      console.log("Computer won the round");
      return 1;
    }
  } else if (playerChoice === "scissors") {
    //else if playerChoice is equal to scissors then if computerChoice is to equal to the paper then
    // "Player won the round" and return 0
    if (computerChoice === "paper") {
      console.log("Player won the round");
      return 0;
    } else if (computerChoice === "rock") {
      ////Else if computerChoice is equal to rock then "Computer won this round" and return 1
      console.log("Computer won the round");
      return 1;
    }
  } else if (playerChoice === "paper") {
    // if playerChoice is equal to else(paper) then if computerChoice is to equal to the rock then
    // display "Player won the round" and return 0
    if (computerChoice === "rock") {
      console.log("Player won the round");
      return 0;
    } else if (computerChoice === "scissors") {
      ////Else if computerChoice is equal to scissors then  "Computer won this round" and return 2
      console.log("Computer won the round");
      return 1;
    }
  }
}

//Create function named playGame

//Create playerScore and computerScore variables and initialize them with value of 0

// create variable computerChoice

//create variable playerChoice

//Write for loop to play five round of game

//Call getComputerChoice function and store the value in computerChoice variable

//Ask what they want to choose among three choices and store it in playerChoice variable

// Call findWinner function with two parameters(playerChoice,computerChoice)
//and if returned value is equal to 0 then add one to playerScore ,else if value is equal to the 2 then
// add one to the computerScore

//After loop finished check if playerScore is greater than computerScore then display
// "Player won the game" else if compChoice is greater then display "Computer won the game"
//else display "DRAW!"

//Call the playGame function
