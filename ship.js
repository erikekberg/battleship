class Ship {
  constructor(length) {
    this.length = length;
    this.shipData = Array(length).fill("S");
    this.coordinates = [];
    this.sunk = false;
  }

  hit(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    } else {
      this.shipData[index] = "H";
      this.isSunk();
    }
  }

  isSunk() {
    for (let i = 0; i < this.length; i++) {
      if (this.shipData[i] === "S") {
        return;
      }
    }
    this.sunk = true;
  }
}

export default Ship;
