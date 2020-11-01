let startButton = document.querySelector(".start");
let options = document.querySelector(".options-container");
let game = document.querySelector(".game-container");

const playerCreation = () => {
  let playerName = document.querySelector(".name").value;
  return { playerName };
};

const gameStart = (() => {
  startButton.addEventListener("click", () => {
    let player = playerCreation();
    options.removeChild(options.firstElementChild);
    options.removeChild(options.firstElementChild);
    game.style.visibility = "visible";
    let playerTitle = document.querySelector(".player");
    playerTitle.textContent = player.playerName;
    return { player };
  });
})();
