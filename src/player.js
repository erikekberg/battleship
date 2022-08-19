import GameBoard from "./gameBoard";

class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard(10);
  }
}

export default Player;
