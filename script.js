function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.33) {
    return "rock";
  } else if (rand < 0.66) {
    return "paper";
  } else return "scissor";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "its a DRAW!";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection} `;
  } else return `You Win! ${playerSelection} beats ${computerSelection}`;
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// console.log(playerChoice);
function game() {
  let playerChoice = prompt("Select rock, paper or scissor: ").toLowerCase();
  console.log(playerChoice);
  if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor") {
    return "You should choose rock, paper, or scissor";
  }
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  return playRound(playerChoice, computerChoice);
}

for (let i = 0; i < 5; i++) {
  console.log(game());
}
