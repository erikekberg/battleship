const GameBoard = require("./gameBoard");

test("allShipsSunk", () => {
  const board = new GameBoard(10);
  board.addShip(0, 0, 3, "x");
  expect(board.allShipsSunk()).toBe(false);
  board.receiveAttack(0, 0);
  board.receiveAttack(1, 0);
  board.receiveAttack(2, 0);
  expect(board.allShipsSunk()).toBe(true);
  board.addShip(0, 1, 3, "x");
  expect(board.allShipsSunk()).toBe(false);
  board.receiveAttack(0, 1);
  board.receiveAttack(1, 1);
  board.receiveAttack(2, 1);
  expect(board.allShipsSunk()).toBe(true);
});
