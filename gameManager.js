import Player from "./player";

class Game {
  constructor() {
    this.turn = 1;
    this.player = new Player("player");
    this.computer = new Player("computer");
  }
}

export default Game;
