let startButton = document.querySelector(".start");
let options = document.querySelector(".options-container");
let game = document.querySelector(".game-container");

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
