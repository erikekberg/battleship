import Game from "./gameManager";
import DOMManager from "./domManager";

const game = new Game();
const domManager = new DOMManager();
let shipLength = 5;
let axis = "x";
const gameOverText = document.createElement("h1");
document.body.appendChild(gameOverText);

const changeAxisButton = document.createElement("button");
changeAxisButton.textContent = "current axis: x";
changeAxisButton.setAttribute("axis", "x");
changeAxisButton.addEventListener("click", () => {
  if (changeAxisButton.getAttribute("axis") === "x") {
    changeAxisButton.setAttribute("axis", "y");
    changeAxisButton.textContent = "current axis: y";
  } else {
    changeAxisButton.setAttribute("axis", "x");
    changeAxisButton.textContent = "current axis: x";
  }
  axis = changeAxisButton.getAttribute("axis");
});
document.body.appendChild(changeAxisButton);
document.body.appendChild(domManager.playerTable);
document.body.appendChild(domManager.computerTable);

for (let i = 5; i > 0; i--) {
  game.computer.board.placeShipsRandomly(i);
}

for (let r = 0; r < domManager.playerTable.childNodes.length; r++) {
  for (
    let i = 0;
    i < domManager.playerTable.childNodes[r].childNodes.length;
    i++
  ) {
    domManager.playerTable.childNodes[r].childNodes[i].addEventListener(
      "click",
      () => {
        if (shipLength > 0) {
          placeShip(r, i);
        }
      }
    );
  }
}

for (let r = 0; r < domManager.computerTable.childNodes.length; r++) {
  for (
    let c = 0;
    c < domManager.computerTable.childNodes[r].childNodes.length;
    c++
  ) {
    domManager.computerTable.childNodes[r].childNodes[c].addEventListener(
      "click",
      () => {
        if (shipLength <= 0) {
          attackComputer(
            parseInt(
              domManager.computerTable.childNodes[r].childNodes[c].getAttribute(
                "x"
              )
            ),
            parseInt(
              domManager.computerTable.childNodes[r].childNodes[c].getAttribute(
                "y"
              )
            )
          );
        }
      }
    );
  }
}

function attackComputer(x, y) {
  for (let i = 0; i < game.computer.board.guesses.length; i++) {
    if (
      x === game.computer.board.guesses[i][0] &&
      y === game.computer.board.guesses[i][1]
    ) {
      return;
    }
  }
  if (game.computer.board.receiveAttack(x, y)) {
    domManager.computerTable.childNodes[y].childNodes[x].style.backgroundColor =
      "red";
    if (game.computer.board.allShipsSunk()) {
      console.log("game over");
      gameOverText.textContent = "Congratulations! You win";
    } else {
      let randomX = Math.floor(Math.random() * 9);
      let randomY = Math.floor(Math.random() * 9);

      while (hasBeenGuessed(randomX, randomY, game.player.board.guesses)) {
        randomX = Math.floor(Math.random() * 9);
        randomY = Math.floor(Math.random() * 9);
      }

      if (game.player.board.receiveAttack(randomX, randomY)) {
        domManager.playerTable.childNodes[randomY].childNodes[
          randomX
        ].style.backgroundColor = "red";
        if (game.player.board.allShipsSunk()) {
          gameOverText.textContent = "Oh no. The Computer won";
        }
      } else {
        domManager.playerTable.childNodes[randomY].childNodes[
          randomX
        ].style.backgroundColor = "blue";
      }
    }
  } else {
    domManager.computerTable.childNodes[y].childNodes[x].style.backgroundColor =
      "blue";
    let randomX = Math.floor(Math.random() * 9);
    let randomY = Math.floor(Math.random() * 9);

    while (hasBeenGuessed(randomX, randomY, game.player.board.guesses)) {
      randomX = Math.floor(Math.random() * 9);
      randomY = Math.floor(Math.random() * 9);
    }

    if (game.player.board.receiveAttack(randomX, randomY)) {
      domManager.playerTable.childNodes[randomY].childNodes[
        randomX
      ].style.backgroundColor = "red";
      if (game.player.board.allShipsSunk()) {
        gameOverText.textContent = "Oh no. The Computer won";
      }
    } else {
      domManager.playerTable.childNodes[randomY].childNodes[
        randomX
      ].style.backgroundColor = "blue";
    }
  }
  console.log(x, y, game.computer.board.guesses);
}

function placeShip(r, i) {
  if (
    game.player.board.addShip(
      parseInt(
        domManager.playerTable.childNodes[r].childNodes[i].getAttribute("x")
      ),
      parseInt(
        domManager.playerTable.childNodes[r].childNodes[i].getAttribute("y")
      ),
      shipLength,
      axis
    )
  ) {
    if (axis === "x") {
      for (let j = 0; j < shipLength; j++) {
        domManager.playerTable.childNodes[r].childNodes[
          i + j
        ].style.backgroundColor = "black";
      }
    } else if (axis === "y") {
      for (let j = 0; j < shipLength; j++) {
        console.log(domManager.playerTable.childNodes[r].childNodes[i]);
        domManager.playerTable.childNodes[r + j].childNodes[
          i
        ].style.backgroundColor = "black";
      }
    }
    shipLength--;
  }
}

function hasBeenGuessed(x, y, missArr) {
  for (let i = 0; i < missArr.length; i++) {
    if (x === missArr[i][0] && y === missArr[i][1]) {
      return true;
    }
  }
  return false;
}
