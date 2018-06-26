import React from 'react';
import ReactDOM from 'react-dom';

import ChessStyles from './chess-styles.js'
import ChessBoard from '../chess/board.js';

class ChessComponent extends React.Component {

	constructor(props){
		super(props);

		var styleClass = new ChessStyles({dimension: 400});
		this.state = {
			styles: styleClass.getStyles(),
			styleClass: styleClass,
			board: new ChessBoard(),
			selectedPiece: null,
			color1 : props.color1 ? props.color1 : "green",
			color2 : props.color2 ? props.color2 : "white"
		}
	}

	getClassNameForBlock(block, ridx, cidx){

		let className = "";

		let selectedPiece = this.state.selectedPiece;

		if (selectedPiece){
			if (selectedPiece == block) className += "highlighted ";
			if (JSON.stringify(selectedPiece.validMoves()).indexOf(JSON.stringify([ridx, cidx])) != -1) className += "moveable ";
		}

		return className;

	}

	getBlocks(){
		var flag = true;
		return this.state.board.grid.map((row, ridx) => {
			flag = !flag;
			return row.map((gridEl, cidx) => {
				let element = null;

				if (gridEl){
					element = (
						<img style={this.state.styles.pieceImage} src={gridEl.image} />
					);
				}
				flag = !flag;
				return (
					<div key={ridx + "derp" + cidx} 
							style={this.state.styleClass.getBlockStyles(flag, this.state.color1, this.state.color2)} 
							row={ridx} col={cidx} onClick={this.blockClick.bind(this)}
							className={this.getClassNameForBlock(gridEl, ridx, cidx)}
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
					{this.getBlocks()}
				</div>
			</div>
		);
	}

}

if (document.getElementById('chess')) {
    ReactDOM.render(<ChessComponent />, document.getElementById('chess'));
}