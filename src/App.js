import React from "react";
import Board from "./utils/Board.js";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<div>
				outside board
				<Board />
			</div>
		);
	}
}

export default App;
