class Knight extends Piece {

	constructor(x, y, board, params){
		super(x, y, board, params);
		this.name = "knight";
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