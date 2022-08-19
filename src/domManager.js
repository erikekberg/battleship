class DOMManager {
  constructor() {
    this.playerTable = document.createElement("table");
    this.fillTable(this.playerTable);
    this.computerTable = document.createElement("table");
    this.fillTable(this.computerTable);
  }

  fillTable(table) {
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 10; j++) {
        const square = document.createElement("td");
        square.setAttribute("x", j);
        square.setAttribute("y", i);
        square.textContent = "O";
        row.appendChild(square);
      }
      table.appendChild(row);
    }
  }
}

module.exports = DOMManager;
