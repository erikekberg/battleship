import Ship from "./ship";

class GameBoard {
  constructor(length) {
    this.length = length;
    this.ships = [];
    this.guesses = [];
  }

  placeShipsRandomly(length) {
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    let randomAxis = Math.random() >= 0.5 ? "x" : "y";

    while (!this.addShip(randomX, randomY, length, randomAxis)) {
      randomX = Math.floor(Math.random() * 10);
      randomY = Math.floor(Math.random() * 10);
      randomAxis = Math.random() >= 0.5 ? "x" : "y";
    }
  }

  addShip(x, y, shipLength, axis = "x") {
    const newShip = new Ship(shipLength);
    if (axis === "x") {
      for (let i = 0; i < shipLength; i++) {
        if (
          x + i > this.length - 1 ||
          x + i < 0 ||
          this.isShipAtPosition(x + i, y)
        ) {
          return null;
        }
        newShip.coordinates.push([x + i, y]);
      }
    } else if (axis === "y") {
      for (let i = 0; i < shipLength; i++) {
        if (
          y + i > this.length - 1 ||
          y + i < 0 ||
          this.isShipAtPosition(x, y + i)
        ) {
          return null;
        }
        newShip.coordinates.push([x, y + i]);
      }
    }

    this.ships.push(newShip);
    return true;
  }

  receiveAttack(x, y) {
    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships[i].coordinates.length; j++) {
        if (
          this.ships[i].coordinates[j][0] === x &&
          this.ships[i].coordinates[j][1] === y
        ) {
          this.ships[i].hit(j);
          this.ships[i].isSunk();
          this.guesses.push([x, y]);
          return true;
        }
      }
    }
    this.guesses.push([x, y]);
    return false;
  }

  isShipAtPosition(x, y) {
    for (let i = 0; i < this.ships.length; i++) {
      for (let j = 0; j < this.ships[i].coordinates.length; j++) {
        if (
          this.ships[i].coordinates[j][0] === x &&
          this.ships[i].coordinates[j][1] === y
        ) {
          return true;
        }
      }
    }
    return false;
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].sunk === false) {
        return false;
      }
    }
    return true;
  }
}

export default GameBoard;
