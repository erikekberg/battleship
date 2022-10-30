/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((module) => {

eval("class DOMManager {\n  constructor() {\n    this.playerTable = document.createElement(\"table\");\n    this.fillTable(this.playerTable);\n    this.computerTable = document.createElement(\"table\");\n    this.fillTable(this.computerTable);\n  }\n\n  fillTable(table) {\n    for (let i = 0; i < 10; i++) {\n      const row = document.createElement(\"tr\");\n      for (let j = 0; j < 10; j++) {\n        const square = document.createElement(\"td\");\n        square.setAttribute(\"x\", j);\n        square.setAttribute(\"y\", i);\n        square.textContent = \"O\";\n        row.appendChild(square);\n      }\n      table.appendChild(row);\n    }\n  }\n}\n\nmodule.exports = DOMManager;\n\n\n//# sourceURL=webpack://battleship/./src/domManager.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard {\n  constructor(length) {\n    this.length = length;\n    this.ships = [];\n    this.guesses = [];\n  }\n\n  placeShipsRandomly(length) {\n    let randomX = Math.floor(Math.random() * 9);\n    let randomY = Math.floor(Math.random() * 9);\n    let randomAxis = Math.random() >= 0.5 ? \"x\" : \"y\";\n\n    while (!this.addShip(randomX, randomY, length, randomAxis)) {\n      randomX = Math.floor(Math.random() * 9);\n      randomY = Math.floor(Math.random() * 9);\n      randomAxis = Math.random() >= 0.5 ? \"x\" : \"y\";\n    }\n  }\n\n  addShip(x, y, shipLength, axis = \"x\") {\n    const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipLength);\n    if (axis === \"x\") {\n      for (let i = 0; i < shipLength; i++) {\n        if (\n          x + i > this.length - 1 ||\n          x + i < 0 ||\n          this.isShipAtPosition(x + i, y)\n        ) {\n          return null;\n        }\n        newShip.coordinates.push([x + i, y]);\n      }\n    } else if (axis === \"y\") {\n      for (let i = 0; i < shipLength; i++) {\n        if (\n          y + i > this.length - 1 ||\n          y + i < 0 ||\n          this.isShipAtPosition(x, y + i)\n        ) {\n          return null;\n        }\n        newShip.coordinates.push([x, y + i]);\n      }\n    }\n\n    this.ships.push(newShip);\n    return true;\n  }\n\n  receiveAttack(x, y) {\n    for (let i = 0; i < this.ships.length; i++) {\n      for (let j = 0; j < this.ships[i].coordinates.length; j++) {\n        if (\n          this.ships[i].coordinates[j][0] === x &&\n          this.ships[i].coordinates[j][1] === y\n        ) {\n          this.ships[i].hit(j);\n          this.ships[i].isSunk();\n          this.guesses.push([x, y]);\n          return true;\n        }\n      }\n    }\n    this.guesses.push([x, y]);\n    return false;\n  }\n\n  isShipAtPosition(x, y) {\n    for (let i = 0; i < this.ships.length; i++) {\n      for (let j = 0; j < this.ships[i].coordinates.length; j++) {\n        if (\n          this.ships[i].coordinates[j][0] === x &&\n          this.ships[i].coordinates[j][1] === y\n        ) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  allShipsSunk() {\n    for (let i = 0; i < this.ships.length; i++) {\n      if (this.ships[i].sunk === false) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameManager.js":
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nclass Game {\n  constructor() {\n    this.turn = 1;\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"player\");\n    this.computer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"computer\");\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship/./src/gameManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameManager */ \"./src/gameManager.js\");\n/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager */ \"./src/domManager.js\");\n/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_domManager__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst game = new _gameManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst domManager = new (_domManager__WEBPACK_IMPORTED_MODULE_1___default())();\nlet shipLength = 5;\nlet axis = \"x\";\nconst gameOverText = document.createElement(\"h1\");\ndocument.body.appendChild(gameOverText);\n\nconst changeAxisButton = document.createElement(\"button\");\nchangeAxisButton.textContent = \"current axis: x\";\nchangeAxisButton.setAttribute(\"axis\", \"x\");\nchangeAxisButton.addEventListener(\"click\", () => {\n  if (changeAxisButton.getAttribute(\"axis\") === \"x\") {\n    changeAxisButton.setAttribute(\"axis\", \"y\");\n    changeAxisButton.textContent = \"current axis: y\";\n  } else {\n    changeAxisButton.setAttribute(\"axis\", \"x\");\n    changeAxisButton.textContent = \"current axis: x\";\n  }\n  axis = changeAxisButton.getAttribute(\"axis\");\n});\ndocument.body.appendChild(changeAxisButton);\ndocument.body.appendChild(domManager.playerTable);\ndocument.body.appendChild(domManager.computerTable);\n\nfor (let i = 5; i > 0; i--) {\n  game.computer.board.placeShipsRandomly(i);\n}\n\nfor (let r = 0; r < domManager.playerTable.childNodes.length; r++) {\n  for (\n    let i = 0;\n    i < domManager.playerTable.childNodes[r].childNodes.length;\n    i++\n  ) {\n    domManager.playerTable.childNodes[r].childNodes[i].addEventListener(\n      \"click\",\n      () => {\n        if (shipLength > 0) {\n          placeShip(r, i);\n        }\n      }\n    );\n  }\n}\n\nfor (let r = 0; r < domManager.computerTable.childNodes.length; r++) {\n  for (\n    let c = 0;\n    c < domManager.computerTable.childNodes[r].childNodes.length;\n    c++\n  ) {\n    domManager.computerTable.childNodes[r].childNodes[c].addEventListener(\n      \"click\",\n      () => {\n        if (shipLength <= 0) {\n          attackComputer(\n            parseInt(\n              domManager.computerTable.childNodes[r].childNodes[c].getAttribute(\n                \"x\"\n              )\n            ),\n            parseInt(\n              domManager.computerTable.childNodes[r].childNodes[c].getAttribute(\n                \"y\"\n              )\n            )\n          );\n        }\n      }\n    );\n  }\n}\n\nfunction attackComputer(x, y) {\n  for (let i = 0; i < game.computer.board.guesses.length; i++) {\n    if (\n      x === game.computer.board.guesses[i][0] &&\n      y === game.computer.board.guesses[i][1]\n    ) {\n      return;\n    }\n  }\n  if (game.computer.board.receiveAttack(x, y)) {\n    domManager.computerTable.childNodes[y].childNodes[x].style.backgroundColor =\n      \"red\";\n    if (game.computer.board.allShipsSunk()) {\n      console.log(\"game over\");\n      gameOverText.textContent = \"Congratulations! You win\";\n    } else {\n      let randomX = Math.floor(Math.random() * 9);\n      let randomY = Math.floor(Math.random() * 9);\n\n      while (hasBeenGuessed(randomX, randomY, game.player.board.guesses)) {\n        randomX = Math.floor(Math.random() * 9);\n        randomY = Math.floor(Math.random() * 9);\n      }\n\n      if (game.player.board.receiveAttack(randomX, randomY)) {\n        domManager.playerTable.childNodes[randomY].childNodes[\n          randomX\n        ].style.backgroundColor = \"red\";\n        if (game.player.board.allShipsSunk()) {\n          gameOverText.textContent = \"Oh no. The Computer won\";\n        }\n      } else {\n        domManager.playerTable.childNodes[randomY].childNodes[\n          randomX\n        ].style.backgroundColor = \"blue\";\n      }\n    }\n  } else {\n    domManager.computerTable.childNodes[y].childNodes[x].style.backgroundColor =\n      \"blue\";\n    let randomX = Math.floor(Math.random() * 9);\n    let randomY = Math.floor(Math.random() * 9);\n\n    while (hasBeenGuessed(randomX, randomY, game.player.board.guesses)) {\n      randomX = Math.floor(Math.random() * 9);\n      randomY = Math.floor(Math.random() * 9);\n    }\n\n    if (game.player.board.receiveAttack(randomX, randomY)) {\n      domManager.playerTable.childNodes[randomY].childNodes[\n        randomX\n      ].style.backgroundColor = \"red\";\n      if (game.player.board.allShipsSunk()) {\n        gameOverText.textContent = \"Oh no. The Computer won\";\n      }\n    } else {\n      domManager.playerTable.childNodes[randomY].childNodes[\n        randomX\n      ].style.backgroundColor = \"blue\";\n    }\n  }\n  console.log(x, y, game.computer.board.guesses);\n}\n\nfunction placeShip(r, i) {\n  if (\n    game.player.board.addShip(\n      parseInt(\n        domManager.playerTable.childNodes[r].childNodes[i].getAttribute(\"x\")\n      ),\n      parseInt(\n        domManager.playerTable.childNodes[r].childNodes[i].getAttribute(\"y\")\n      ),\n      shipLength,\n      axis\n    )\n  ) {\n    if (axis === \"x\") {\n      for (let j = 0; j < shipLength; j++) {\n        domManager.playerTable.childNodes[r].childNodes[\n          i + j\n        ].style.backgroundColor = \"black\";\n      }\n    } else if (axis === \"y\") {\n      for (let j = 0; j < shipLength; j++) {\n        console.log(domManager.playerTable.childNodes[r].childNodes[i]);\n        domManager.playerTable.childNodes[r + j].childNodes[\n          i\n        ].style.backgroundColor = \"black\";\n      }\n    }\n    shipLength--;\n  }\n}\n\nfunction hasBeenGuessed(x, y, missArr) {\n  for (let i = 0; i < missArr.length; i++) {\n    if (x === missArr[i][0] && y === missArr[i][1]) {\n      return true;\n    }\n  }\n  return false;\n}\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.board = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.shipData = Array(length).fill(\"S\");\n    this.coordinates = [];\n    this.sunk = false;\n  }\n\n  hit(index) {\n    if (index < 0 || index > this.length - 1) {\n      return null;\n    } else {\n      this.shipData[index] = \"H\";\n      this.isSunk();\n    }\n  }\n\n  isSunk() {\n    for (let i = 0; i < this.length; i++) {\n      if (this.shipData[i] === \"S\") {\n        return;\n      }\n    }\n    this.sunk = true;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;