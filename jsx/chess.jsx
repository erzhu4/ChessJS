import React from 'react';

import ChessStyles from './chess-styles.js'
import {Board} from '../js/chess.js';

export default class ChessComponent extends React.Component {

	constructor(props){
		super(props);

		var styleClass = new ChessStyles({dimension: 400});
		this.state = {
			styles: styleClass.getStyles(),
			styleClass: styleClass,
			board: new Board(),
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

		let row = parseInt(event.currentTarget.getAttribute("row"));
		let col = parseInt(event.currentTarget.getAttribute("col"));
		var elementClickedOn = this.state.board.grid[row][col];

		//validate current player and correct colored piece clicked on
		if (this.props.currentPlayer){
			if (this.props.currentPlayer != this.props.player){
				return;
			}
			if (!this.state.selectedPiece && elementClickedOn && elementClickedOn.color != this.props.player.color){
				return;
			}
		}

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
				this.props.moveSuccessful([row, col]);
			} else {
				this.setState({
					selectedPiece: null
				});
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