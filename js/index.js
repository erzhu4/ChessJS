/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function () {
	function Piece(x, y, board, params) {
		_classCallCheck(this, Piece);

		this.board = board;
		this.pos = [x, y];
		this.color = params['color'] ? params['color'] : null;
		this.imageDirectory = "images/";
	}

	_createClass(Piece, [{
		key: 'checkMove',
		value: function checkMove(loc) {
			if (loc[0] < 0 || loc[1] < 0 || loc[0] >= 8 || loc[1] >= 8) {
				return false;
			}

			if (this.board.grid[loc[0]][loc[1]] && this.board.grid[loc[0]][loc[1]].color == this.color) return false;

			return true;
		}

		//default for sliding pieces IE rook, bishop and queen

	}, {
		key: 'validMoves',
		value: function validMoves() {
			var arr = [];
			if (!this.dirs) {
				return arr;
			}
			for (var i = 0; i < this.dirs.length; i++) {
				var x = 1;
				var flag = true;
				while (flag) {
					var move = [this.pos[0] + this.dirs[i][0] * x, this.pos[1] + this.dirs[i][1] * x];
					if (!this.checkMove(move)) {
						break;
					}
					arr.push(move);
					if (this.board.grid[move[0]][move[1]]) {
						break;
					}
					x++;
				}
			}

			return arr;
		}
	}, {
		key: 'move',
		value: function move(location) {
			//can't take your own piece
			if (this.board[(location[0], location[1])] && this.board[(location[0], location[1])].color == this.color) {
				alert("Error piece unplaceable");
				return false;
			}

			if (JSON.stringify(this.validMoves()).indexOf(JSON.stringify(location)) != -1) {
				this.board.grid[location[0]][location[1]] = this;
				this.board.grid[this.pos[0]][this.pos[1]] = null;
				this.pos[0] = location[0];
				this.pos[1] = location[1];
				return true;
			}

			return false;
		}
	}]);

	return Piece;
}();

exports.default = Piece;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ezChess = __webpack_require__(3);

var _ezChess2 = _interopRequireDefault(_ezChess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ezChess2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

var _bishop = __webpack_require__(4);

var _bishop2 = _interopRequireDefault(_bishop);

var _pawn = __webpack_require__(5);

var _pawn2 = _interopRequireDefault(_pawn);

var _queen = __webpack_require__(6);

var _queen2 = _interopRequireDefault(_queen);

var _king = __webpack_require__(7);

var _king2 = _interopRequireDefault(_king);

var _rook = __webpack_require__(8);

var _rook2 = _interopRequireDefault(_rook);

var _knight = __webpack_require__(9);

var _knight2 = _interopRequireDefault(_knight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ezChess = function () {
	function ezChess() {
		_classCallCheck(this, ezChess);

		this.grid = this.initGrid();
		this.initPieces();
	}

	_createClass(ezChess, [{
		key: 'initGrid',
		value: function initGrid() {
			var result = [];
			for (var i = 0; i < 8; i++) {
				result.push([]);
				for (var x = 0; x < 8; x++) {
					result[i].push(null);
				}
			}
			return result;
		}
	}, {
		key: 'initPieces',
		value: function initPieces() {
			var _this = this;

			//set white pawns
			this.grid[6].forEach(function (slot, idx) {
				_this.grid[6][idx] = new _pawn2.default(6, idx, _this, { color: "white" });
			});

			//set black pawns
			this.grid[1].forEach(function (slot, idx) {
				_this.grid[1][idx] = new _pawn2.default(1, idx, _this, { color: "black" });
			});

			//set queens
			this.grid[7][3] = new _queen2.default(7, 3, this, { color: "white" });
			this.grid[0][3] = new _queen2.default(0, 3, this, { color: "black" });

			//set kings
			this.grid[7][4] = new _king2.default(7, 4, this, { color: "white" });
			this.grid[0][4] = new _king2.default(0, 4, this, { color: "black" });

			//set bishops
			this.grid[7][2] = new _bishop2.default(7, 2, this, { color: "white" });
			this.grid[7][5] = new _bishop2.default(7, 5, this, { color: "white" });
			this.grid[0][2] = new _bishop2.default(0, 2, this, { color: "black" });
			this.grid[0][5] = new _bishop2.default(0, 5, this, { color: "black" });

			//set knights
			this.grid[7][1] = new _knight2.default(7, 1, this, { color: "white" });
			this.grid[7][6] = new _knight2.default(7, 6, this, { color: "white" });
			this.grid[0][1] = new _knight2.default(0, 1, this, { color: "black" });
			this.grid[0][6] = new _knight2.default(0, 6, this, { color: "black" });

			//set rooks
			this.grid[7][0] = new _rook2.default(7, 0, this, { color: "white" });
			this.grid[7][7] = new _rook2.default(7, 7, this, { color: "white" });
			this.grid[0][0] = new _rook2.default(0, 0, this, { color: "black" });
			this.grid[0][7] = new _rook2.default(0, 7, this, { color: "black" });
		}
	}]);

	return ezChess;
}();

exports.default = ezChess;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bishop = function (_Piece) {
	_inherits(Bishop, _Piece);

	function Bishop(x, y, board, params) {
		_classCallCheck(this, Bishop);

		var _this = _possibleConstructorReturn(this, (Bishop.__proto__ || Object.getPrototypeOf(Bishop)).call(this, x, y, board, params));

		_this.name = "bishop";
		_this.dirs = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
		_this.image = params['customImage'] ? _this.imageDirectory + params['customImage'] : _this.imageDirectory + _this.color + "_" + _this.name + ".png";
		return _this;
	}

	_createClass(Bishop, [{
		key: 'validMoves',
		value: function validMoves() {
			return _get(Bishop.prototype.__proto__ || Object.getPrototypeOf(Bishop.prototype), 'validMoves', this).call(this);
		}
	}]);

	return Bishop;
}(_piece2.default);

exports.default = Bishop;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pawn = function (_Piece) {
	_inherits(Pawn, _Piece);

	function Pawn(x, y, board, params) {
		_classCallCheck(this, Pawn);

		var _this = _possibleConstructorReturn(this, (Pawn.__proto__ || Object.getPrototypeOf(Pawn)).call(this, x, y, board, params));

		_this.name = "pawn";
		_this.firstMove = true;
		_this.image = params['customImage'] ? _this.imageDirectory + params['customImage'] : _this.imageDirectory + _this.color + "_" + _this.name + ".png";
		return _this;
	}

	_createClass(Pawn, [{
		key: 'validMoves',
		value: function validMoves() {
			var _this2 = this;

			var possibleMoves = [];

			if (this.color == "white") {
				possibleMoves.push([this.pos[0] - 1, this.pos[1]]);
				possibleMoves.push([this.pos[0] - 1, this.pos[1] - 1]);
				possibleMoves.push([this.pos[0] - 1, this.pos[1] + 1]);
				if (this.firstMove && this.checkMove([this.pos[0] - 1, this.pos[1]])) {
					possibleMoves.push([this.pos[0] - 2, this.pos[1]]);
				}
			} else if (this.color == "black") {
				possibleMoves.push([this.pos[0] + 1, this.pos[1]]);
				possibleMoves.push([this.pos[0] + 1, this.pos[1] - 1]);
				possibleMoves.push([this.pos[0] + 1, this.pos[1] + 1]);
				if (this.firstMove && this.checkMove([this.pos[0] + 1, this.pos[1]])) {
					possibleMoves.push([this.pos[0] + 2, this.pos[1]]);
				}
			}

			return possibleMoves.filter(function (move) {
				if (!_this2.checkMove(move)) {
					return false;
				}
				//diagnal kill move
				if (move[1] != _this2.pos[1]) {
					return _this2.board.grid[move[0]][move[1]] && _this2.board.grid[move[0]][move[1]].color != _this2.color;
				}
				//straight non kill move
				if (move[1] == _this2.pos[1]) {
					return !_this2.board.grid[move[0]][move[1]];
				}
				return true;
			});
		}
	}, {
		key: 'move',
		value: function move(location) {
			var result = _get(Pawn.prototype.__proto__ || Object.getPrototypeOf(Pawn.prototype), 'move', this).call(this, location);
			if (result) {
				this.firstMove = false;
			}
			return result;
		}
	}]);

	return Pawn;
}(_piece2.default);

exports.default = Pawn;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queen = function (_Piece) {
	_inherits(Queen, _Piece);

	function Queen(x, y, board, params) {
		_classCallCheck(this, Queen);

		var _this = _possibleConstructorReturn(this, (Queen.__proto__ || Object.getPrototypeOf(Queen)).call(this, x, y, board, params));

		_this.name = "queen";
		_this.dirs = [[1, 1], [-1, 1], [-1, -1], [1, -1], [1, 0], [0, 1], [-1, 0], [0, -1]];
		_this.image = params['customImage'] ? _this.imageDirectory + params['customImage'] : _this.imageDirectory + _this.color + "_" + _this.name + ".png";
		return _this;
	}

	_createClass(Queen, [{
		key: 'validMoves',
		value: function validMoves() {
			return _get(Queen.prototype.__proto__ || Object.getPrototypeOf(Queen.prototype), 'validMoves', this).call(this);
		}
	}]);

	return Queen;
}(_piece2.default);

exports.default = Queen;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var King = function (_Piece) {
	_inherits(King, _Piece);

	function King(x, y, board, params) {
		_classCallCheck(this, King);

		var _this = _possibleConstructorReturn(this, (King.__proto__ || Object.getPrototypeOf(King)).call(this, x, y, board, params));

		_this.name = "king";
		_this.image = params['customImage'] ? _this.imageDirectory + params['customImage'] : _this.imageDirectory + _this.color + "_" + _this.name + ".png";
		return _this;
	}

	_createClass(King, [{
		key: 'validMoves',
		value: function validMoves() {
			var _this2 = this;

			var possibleMoves = [[this.pos[0] - 1, this.pos[1] - 1], [this.pos[0] - 1, this.pos[1]], [this.pos[0] - 1, this.pos[1] + 1], [this.pos[0], this.pos[1] + 1], [this.pos[0], this.pos[1] - 1], [this.pos[0] + 1, this.pos[1] - 1], [this.pos[0] + 1, this.pos[1] + 1], [this.pos[0] + 1, this.pos[1]]];
			return possibleMoves.filter(function (move) {
				return _this2.checkMove(move);
			});
		}
	}]);

	return King;
}(_piece2.default);

exports.default = King;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rook = function (_Piece) {
	_inherits(Rook, _Piece);

	function Rook(x, y, board, params) {
		_classCallCheck(this, Rook);

		var _this = _possibleConstructorReturn(this, (Rook.__proto__ || Object.getPrototypeOf(Rook)).call(this, x, y, board, params));

		_this.name = "rook";
		_this.dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
		_this.image = params['customImage'] ? _this.imageDirectory + params['customImage'] : _this.imageDirectory + _this.color + "_" + _this.name + ".png";
		return _this;
	}

	_createClass(Rook, [{
		key: 'validMoves',
		value: function validMoves() {
			return _get(Rook.prototype.__proto__ || Object.getPrototypeOf(Rook.prototype), 'validMoves', this).call(this);
		}
	}]);

	return Rook;
}(_piece2.default);

exports.default = Rook;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _piece = __webpack_require__(0);

var _piece2 = _interopRequireDefault(_piece);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Knight = function (_Piece) {
	_inherits(Knight, _Piece);

	function Knight(x, y, board, params) {
		_classCallCheck(this, Knight);

		var _this = _possibleConstructorReturn(this, (Knight.__proto__ || Object.getPrototypeOf(Knight)).call(this, x, y, board, params));

		_this.name = "knight";
		_this.image = params['customImage'] ? _this.imageDirectory + params['customImage'] : _this.imageDirectory + _this.color + "_" + _this.name + ".png";
		return _this;
	}

	_createClass(Knight, [{
		key: 'validMoves',
		value: function validMoves() {
			var _this2 = this;

			var possibleMoves = [[this.pos[0] - 1, this.pos[1] - 2], [this.pos[0] - 1, this.pos[1] + 2], [this.pos[0] - 2, this.pos[1] - 1], [this.pos[0] - 2, this.pos[1] + 1], [this.pos[0] + 1, this.pos[1] - 2], [this.pos[0] + 1, this.pos[1] + 2], [this.pos[0] + 2, this.pos[1] - 1], [this.pos[0] + 2, this.pos[1] + 1]];
			return possibleMoves.filter(function (move) {
				return _this2.checkMove(move);
			});
		}
	}]);

	return Knight;
}(_piece2.default);

exports.default = Knight;

/***/ })
/******/ ]);