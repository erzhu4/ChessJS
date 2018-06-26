import React from 'react';
import ReactDOM from 'react-dom';

import Player from './js/ChessPlayer.js';

import ChessComponent from './jsx/chess.jsx';

class Chess extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			player1: new Player("white"),
			player2: new Player("black"),
			currentPlayer: null
		};

		this.state.currentPlayer = this.state.player1;
	}

	moveSuccessful(params){
		if (this.state.currentPlayer == this.state.player1){
			this.setState({
				currentPlayer: this.state.player2
			});
		} else {
			this.setState({
				currentPlayer: this.state.player1
			});
		}
	}

	render(){
		return (
			<div>
				<ChessComponent currentPlayer={this.state.currentPlayer} player={this.state.currentPlayer} moveSuccessful={this.moveSuccessful.bind(this)} />
			</div>
		);
	}

}

if (document.getElementById('chess')) {
    ReactDOM.render(<Chess />, document.getElementById('chess'));
}