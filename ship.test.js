const Ship = require("./ship");

test("test hit method", () => {
  const ship = new Ship(3);
  expect(ship.shipData).toEqual(["S", "S", "S"]);
  ship.hit(2);
  expect(ship.shipData).toEqual(["S", "S", "H"]);
});

test("test hit method index out of range", () => {
  const ship = new Ship(4);
  ship.hit(5);
  expect(ship.shipData).toEqual(["S", "S", "S", "S"]);
});

test("isSunk method working", () => {
  const ship = new Ship(3);
  expect(ship.sunk).toBe(false);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.sunk).toBe(true);
});
