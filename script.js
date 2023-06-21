let playerScore = 0;

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
    // playerScore > 0 ? playerScore-- : null;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
}

const content = document.querySelector(".content");
const btns = document.querySelectorAll(".btn-game");
const gameStatus = document.querySelector(".game-status");
const score = document.querySelector(".score");
const announcement = document.querySelector(".announcement");
const endGame = document.querySelector(".end-game");
const resetBtn = document.querySelector(".btn-reset");

score.textContent = `Current score is: ${playerScore}`;

const checkScore = () => {
  if (playerScore == 5) {
    announcement.classList.toggle("hide");
    content.classList.toggle("hide");
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const result = playRound(e.srcElement.id, getComputerChoice());
    gameStatus.textContent = result;
    score.textContent = `Current score is: ${playerScore}`;
    checkScore();
  });
});

resetBtn.addEventListener("click", () => {
  content.classList.toggle("hide");
  announcement.classList.toggle("hide");
  playerScore = 0;
  score.textContent = `Current score is: ${playerScore}`;
});
