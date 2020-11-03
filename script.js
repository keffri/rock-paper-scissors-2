let startButton = document.querySelector(".start");
let options = document.querySelector(".options-container");
let game = document.querySelector(".game-container");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const playerCreation = () => {
  let playerName = document.querySelector(".name").value;
  return { playerName };
};

const gameStart = (() => {
  createPlayer = () => {
    let player = playerCreation();
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
})();

const gameFunction = (() => {
  const choices = ["Rock", "Paper", "Scissors"];
  let computerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };

  return { computerChoice };
})();
