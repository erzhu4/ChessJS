import Piece from './piece.js';

export default class King extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "king";
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