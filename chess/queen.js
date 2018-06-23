import Piece from './piece.js';

export default class Queen extends Piece {

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
	}

	validMoves(){
		return super.validMoves();
	}
	
}