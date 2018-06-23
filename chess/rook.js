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
	}

	validMoves(){
		return super.validMoves();
	}
	
}