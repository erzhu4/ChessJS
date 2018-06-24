export default class ChessStyles {

	constructor(params){
		this.dim = params['dimension']
	}

	getBlockStyles(flag, color1, color2){
		let color;
		if (flag){
			color = color1;
		} else {
			color = color2;
		}

		return {
	        width: '50px',
	        height: '50px',
	        float: 'left',
	        backgroundColor: color
		}
	}

	getStyles(){
		return {
		    boardContainer: {
		        backgroundImage: 'url("images/chessboard.jpg")',
		        width: '400px',
		        height: '400px',
		        backgroundSize: 'cover'
		    },

		    pieceImage: {
	    	    width: '100%',
    			height: '100%'
		    }
		};
	}
}