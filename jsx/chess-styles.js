export default class ChessStyles {

	constructor(params){
		this.dim = params['dimension']
	}

	getStyles(){
		return {
		    boardContainer: {
		        backgroundImage: 'url("images/chessboard.jpg")',
		        width: '400px',
		        height: '400px',
		        backgroundSize: 'cover'
		    },

		    block: {
		        width: '50px',
		        height: '50px'
		    }
		};
	}
}