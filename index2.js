class Piece {

	constructor(x, y, board, params){
		this.board = board;
		this.pos = [x, y];
		this.color = params['color'] ? params['color'] : null;
		this.imageDirectory = "images/";
	}

	checkMove(loc){
		if (
			loc[0] < 0 ||
			loc[1] < 0 ||
			loc[0] >= 8 ||
			loc[1] >= 8
		){
			return false;
		}

		if (this.board.grid[loc[0]][loc[1]] && this.board.grid[loc[0]][loc[1]].color == this.color) return false;

		return true;
	}

	//default for sliding pieces IE rook, bishop and queen
	validMoves(){
		var arr = [];
		if (!this.dirs){
			return arr;
		}
		for (var i = 0; i < this.dirs.length; i++){
			var x = 1;
			var flag = true;
			while (flag){
				var move = [ this.pos[0] + (this.dirs[i][0] * x), this.pos[1] + (this.dirs[i][1] * x) ];
				if (!this.checkMove(move)){
					break;
				}
				arr.push(move);
				if (this.board.grid[move[0]][move[1]]){
					break;
				}
				x++;
			}
		}

		return arr;
	}

	move(location){
		//can't take your own piece
		if (this.board[location[0], location[1]] && this.board[location[0], location[1]].color == this.color){
			alert("Error piece unplaceable");
			return false;
		}

		if (JSON.stringify(this.validMoves()).indexOf(JSON.stringify(location)) != -1){
			this.board.grid[location[0]][location[1]] = this;
			this.board.grid[this.pos[0]][this.pos[1]] = null;
			this.pos[0] = location[0];
			this.pos[1] = location[1];
			return true;
		}

		return false;
	}

}

class Bishop extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "bishop";
		this.dirs = [
			[1,1], 
			[-1,1], 
			[-1,-1],
			[1, -1]
		];
		this.image = params['customImage'] ? this.imageDirectory + params['customImage'] : this.imageDirectory + this.color + "_" + this.name + ".png";
	}

	validMoves(){
		return super.validMoves();
	}
}

class Pawn extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "pawn";
		this.firstMove = true;
		this.image = params['customImage'] ? this.imageDirectory + params['customImage'] : this.imageDirectory + this.color + "_" + this.name + ".png";
	}

	validMoves(){
		let possibleMoves = [];

		if (this.color == "white"){
			possibleMoves.push([this.pos[0] - 1, this.pos[1]]);
			possibleMoves.push([this.pos[0] - 1, this.pos[1] - 1]);
			possibleMoves.push([this.pos[0] - 1, this.pos[1] + 1]);
			if (this.firstMove&& this.checkMove([this.pos[0] - 1, this.pos[1]]) ){
				possibleMoves.push([this.pos[0] - 2, this.pos[1]]);
			}
		} else if (this.color == "black"){
			possibleMoves.push([this.pos[0] + 1, this.pos[1]]);
			possibleMoves.push([this.pos[0] + 1, this.pos[1] - 1]);
			possibleMoves.push([this.pos[0] + 1, this.pos[1] + 1]);
			if (this.firstMove && this.checkMove([this.pos[0] + 1, this.pos[1]])){
				possibleMoves.push([this.pos[0] + 2, this.pos[1]]);
			}
		}
		
		return possibleMoves.filter((move) => {
			if (!this.checkMove(move)){
				return false;
			}
			//diagnal kill move
			if (move[1] != this.pos[1]){
				return this.board.grid[move[0]][move[1]] && this.board.grid[move[0]][move[1]].color != this.color;
			}
			//straight non kill move
			if (move[1] == this.pos[1]){
				return !this.board.grid[move[0]][move[1]];
			}
			return true;
		});
	}

	move(location){
		var result = super.move(location);
		if (result){
			this.firstMove = false;
		}
		return result;
	}

}

class Queen extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "queen";
		this.dirs = [
			[1,1], 
			[-1,1], 
			[-1,-1],
			[1, -1],
			[1, 0],
			[0, 1],
			[-1, 0],
			[0, -1]
		];
		this.image = params['customImage'] ? this.imageDirectory + params['customImage'] : this.imageDirectory + this.color + "_" + this.name + ".png";
	}

	validMoves(){
		return super.validMoves();
	}
	
}

class King extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "king";
		this.image = params['customImage'] ? this.imageDirectory + params['customImage'] : this.imageDirectory + this.color + "_" + this.name + ".png";
	}

	validMoves(){
		let possibleMoves = [
			[this.pos[0] - 1, this.pos[1] - 1],
			[this.pos[0] - 1, this.pos[1]],
			[this.pos[0] - 1, this.pos[1] + 1],
			[this.pos[0], this.pos[1] + 1],
			[this.pos[0], this.pos[1] - 1],
			[this.pos[0] + 1, this.pos[1] - 1],
			[this.pos[0] + 1, this.pos[1] + 1],
			[this.pos[0] + 1, this.pos[1]]
		];
		return possibleMoves.filter((move) => {
			return this.checkMove(move);
		});
	}
	
}

class Rook extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "rook";
		this.dirs = [
			[1,0],
			[0,1],
			[-1, 0],
			[0, -1]
		];
		this.image = params['customImage'] ? this.imageDirectory + params['customImage'] : this.imageDirectory + this.color + "_" + this.name + ".png";
	}

	validMoves(){
		return super.validMoves();
	}
	
}

class Knight extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "knight";
		this.image = params['customImage'] ? this.imageDirectory + params['customImage'] : this.imageDirectory + this.color + "_" + this.name + ".png";
	}

	validMoves(){
		let possibleMoves = [
			[this.pos[0] - 1, this.pos[1] - 2],
			[this.pos[0] - 1, this.pos[1] + 2],
			[this.pos[0] - 2, this.pos[1] - 1],
			[this.pos[0] - 2, this.pos[1] + 1],
			[this.pos[0] + 1, this.pos[1] - 2],
			[this.pos[0] + 1, this.pos[1] + 2],
			[this.pos[0] + 2, this.pos[1] - 1],
			[this.pos[0] + 2, this.pos[1] + 1]
		];
		return possibleMoves.filter((move) => {
			return this.checkMove(move);
		});
	}
}

class Chess {

	constructor(){
		this.grid = this.initGrid();
		this.initPieces();
	}

	initGrid(){
		var result = [];
		for (var i = 0; i < 8; i++){
			result.push([]);
			for (var x = 0; x < 8; x++){
				result[i].push(null);
			}
		}
		return result;
	}

	initPieces(){
		//set white pawns
		this.grid[6].forEach((slot, idx) => {
			this.grid[6][idx] = new Pawn(6, idx, this, {color: "white"});
		});

		//set black pawns
		this.grid[1].forEach((slot, idx) => {
			this.grid[1][idx] = new Pawn(1, idx, this, {color: "black"});
		});

		//set queens
		this.grid[7][3] = new Queen(7, 3, this, {color: "white"});
		this.grid[0][3] = new Queen(0, 3, this, {color: "black"});

		//set kings
		this.grid[7][4] = new King(7, 4, this, {color: "white"});
		this.grid[0][4] = new King(0, 4, this, {color: "black"});

		//set bishops
		this.grid[7][2] = new Bishop(7, 2, this, {color: "white"});
		this.grid[7][5] = new Bishop(7, 5, this, {color: "white"});
		this.grid[0][2] = new Bishop(0, 2, this, {color: "black"});
		this.grid[0][5] = new Bishop(0, 5, this, {color: "black"});

		//set knights
		this.grid[7][1] = new Knight(7, 1, this, {color: "white"});
		this.grid[7][6] = new Knight(7, 6, this, {color: "white"});
		this.grid[0][1] = new Knight(0, 1, this, {color: "black"});
		this.grid[0][6] = new Knight(0, 6, this, {color: "black"});

		//set rooks
		this.grid[7][0] = new Rook(7, 0, this, {color: "white"});
		this.grid[7][7] = new Rook(7, 7, this, {color: "white"});
		this.grid[0][0] = new Rook(0, 0, this, {color: "black"});
		this.grid[0][7] = new Rook(0, 7, this, {color: "black"});

	}

}

module.exports = Chess;