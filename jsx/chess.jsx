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
			board: new ChessBoard(),
			selectedPiece: null
		}
	}

	initBlocks(){
		return this.state.board.grid.map((row, ridx) => {
			return row.map((gridEl, cidx) => {
				let element = null;

				if (gridEl){
					element = (
						<div style={{color:'red'}}>
							{gridEl.name}
						</div>
					);
				}

				return (
					<div key={ridx + "derp" + cidx} 
							style={this.state.styles.block} 
							row={ridx} col={cidx} onClick={this.blockClick.bind(this)}
							className={this.state.selectedPiece && this.state.selectedPiece == gridEl ? "selected" : null}
						>
							{element}
					</div>
				);
			});
		});
	}

	blockClick(event){
		//TODO: validate player first

		let row = parseInt(event.currentTarget.getAttribute("row"));
		let col = parseInt(event.currentTarget.getAttribute("col"));
		var elementClickedOn = this.state.board.grid[row][col];

		//Has not seleced a piece or selected another piece of same color
		if (!this.state.selectedPiece || (elementClickedOn && elementClickedOn.color == this.state.selectedPiece.color)){
			this.setState({
				selectedPiece: elementClickedOn
			});
		} else {
			//clicked the same piece
			if (this.state.selectedPiece == elementClickedOn){
				return;
			}

			//moved successfully
			if (this.state.selectedPiece.move([row, col])){
				this.setState({
					selectedPiece: null
				});
			} else {
				alert("move is illegal");
			}
		}
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