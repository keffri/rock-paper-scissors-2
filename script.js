let startButton = document.querySelector(".start");
let options = document.querySelector(".options-container");
let game = document.querySelector(".game-container");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let resultsText = document.querySelector(".results");

const playerCreation = () => {
  let playerName = document.querySelector(".name").value;
  return { playerName };
};

const gameStart = (() => {
  let player;
  createPlayer = () => {
    player = playerCreation();
    if (player.playerName === "") {
      alert("Please enter a name.");
      return;
    }
    options.removeChild(options.firstElementChild);
    options.removeChild(options.firstElementChild);
    game.style.visibility = "visible";
    let playerTitle = document.querySelector(".player");
    playerTitle.textContent = player.playerName;
    return { player };
  };

  startButton.addEventListener("click", createPlayer);
  document.addEventListener("keypress", (e) => {
    let key = e.key;
    if (key === "Enter") {
      createPlayer();
    }
  });

  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let computerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };

  let playerChoice;
  rockButton.addEventListener("click", () => {
    let computerPick = computerChoice();
    playerChoice = "ROCK";
    if (computerPick === "SCISSORS") {
      resultsText.textContent = `${player.playerName}'s ${playerChoice} beats Computer's ${computerPick}!`;
    } else if (computerPick === "PAPER") {
      resultsText.textContent = `Computer's ${computerPick} beats ${player.playerName}'s ${playerChoice}!`;
    } else {
      resultsText.textContent = `Draw! Both players selected ${playerChoice}.`;
    }
  });

  paperButton.addEventListener("click", () => {
    let computerPick = computerChoice();
    playerChoice = "PAPER";
    if (computerPick === "ROCK") {
      resultsText.textContent = `${player.playerName}'s ${playerChoice} beats Computer's ${computerPick}!`;
    } else if (computerPick === "SCISSORS") {
      resultsText.textContent = `Computer's ${computerPick} beats ${player.playerName}'s ${playerChoice}!`;
    } else {
      resultsText.textContent = `Draw! Both players selected ${playerChoice}.`;
    }
  });

  scissorsButton.addEventListener("click", () => {
    let computerPick = computerChoice();
    playerChoice = "SCISSORS";
    if (computerPick === "PAPER") {
      resultsText.textContent = `${player.playerName}'s ${playerChoice} beats Computer's ${computerPick}!`;
    } else if (computerPick === "ROCK") {
      resultsText.textContent = `Computer's ${computerPick} beats ${player.playerName}'s ${playerChoice}!`;
    } else {
      resultsText.textContent = `Draw! Both players selected ${playerChoice}.`;
    }
  });

  return { computerChoice };
})();
