import React from 'react';
import ReactDOM from 'react-dom';

import ChessStyles from './chess-styles.js'
import ChessBoard from '../chess/board.js';

class ChessComponent extends React.Component {

	constructor(props){
		super(props);

		var styles = new ChessStyles({dimension: 400}).getStyles();
		this.state = {
			styles: styles,
			board: new ChessBoard()
		}
	}

	render(){
		return (
			<div>
				<div className="boardContainer" style={this.state.styles.boardContainer}>

				</div>
			</div>
		);
	}

}

if (document.getElementById('chess')) {
    ReactDOM.render(<ChessComponent />, document.getElementById('chess'));
}