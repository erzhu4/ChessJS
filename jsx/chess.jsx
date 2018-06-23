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

	initBlocks(){
		return this.state.board.grid.map((row, ridx) => {
			return row.map((col, cidx) => {
				let element = null;
				if (this.state.board.grid[ridx][cidx]){
					element = <div style={{color:'red'}}>{this.state.board.grid[ridx][cidx].name}</div>
				}

				return (
					<div key={ridx + "derp" + cidx} style={this.state.styles.block} row={ridx} col={cidx}>
						{element}
					</div>
				);
			});
		});
	}

	render(){
		return (
			<div>
				<div className="boardContainer" style={this.state.styles.boardContainer}>
					{this.initBlocks()}
				</div>
			</div>
		);
	}

}

if (document.getElementById('chess')) {
    ReactDOM.render(<ChessComponent />, document.getElementById('chess'));
}