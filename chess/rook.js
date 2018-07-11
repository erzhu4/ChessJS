var Piece = require('./piece.js');

module.exports = class Rook extends Piece {

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