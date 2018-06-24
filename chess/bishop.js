import Piece from './piece.js';

export default class Bishop extends Piece {

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