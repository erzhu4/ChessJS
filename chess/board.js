class Board {

	constructor(){
		this.grid = this.initGrid();
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
		this.grid[7][2] = new Knight(7, 2, this, {color: "white"});
		this.grid[7][5] = new Knight(7, 5, this, {color: "white"});
		this.grid[0][2] = new Knight(0, 2, this, {color: "black"});
		this.grid[0][5] = new Knight(0, 5, this, {color: "black"});

		//set knights
		this.grid[7][1] = new Bishop(7, 1, this, {color: "white"});
		this.grid[7][6] = new Bishop(7, 6, this, {color: "white"});
		this.grid[0][1] = new Bishop(0, 1, this, {color: "black"});
		this.grid[0][6] = new Bishop(0, 6, this, {color: "black"});

		//set rooks
		this.grid[7][0] = new Rook(7, 0, this, {color: "white"});
		this.grid[7][7] = new Rook(7, 7, this, {color: "white"});
		this.grid[0][0] = new Rook(0, 0, this, {color: "black"});
		this.grid[0][7] = new Rook(0, 7, this, {color: "black"});

	}

}