import Piece from './piece.js';

export default class Pawn extends Piece {

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
			if (this.firstMove){
				possibleMoves.push([this.pos[0] - 2, this.pos[1]]);
			}
		} else if (this.color == "black"){
			possibleMoves.push([this.pos[0] + 1, this.pos[1]]);
			possibleMoves.push([this.pos[0] + 1, this.pos[1] - 1]);
			possibleMoves.push([this.pos[0] + 1, this.pos[1] + 1]);
			if (this.firstMove){
				possibleMoves.push([this.pos[0] + 2, this.pos[1]]);
			}
		}
		
		return possibleMoves.filter((move) => {
			if (!this.checkMove(move)){
				return false;
			}
			if (move[1] != this.pos[1]){
				return this.board.grid[move[0]][move[1]] && this.board.grid[move[0]][move[1]].color != this.color;
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