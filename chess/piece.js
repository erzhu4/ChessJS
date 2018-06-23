class Piece {

	constructor(x, y, board, params){
		this.board = board;
		this.pos = [x, y];
		this.color = params['color'] ? params['color'] : null;
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

		if (JSON.stringify(this.validMoves()).indexOf(JSON.stringify(location))){
			this.board.grid[location[0]][location[1]] = this;
			this.board.grid[this.pos[0]][this.pos[1]] = null;
			this.pos[0] = location[0];
			this.pos[1] = location[1];
			return true;
		}

		return false;
	}

}