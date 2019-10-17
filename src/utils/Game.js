import React from "react";
// import styles from "../index.css";
import Board from "./Board.js";
import Status from "./Status.js";

const Game = (props) => {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [xTurn, setXTurn] = React.useState(true);
	return (
		<div>
			<Status squares={squares} xTurn={xTurn} />
			<Board
				squares={squares}
				setSquares={setSquares}
				xTurn={xTurn}
				setXTurn={setXTurn}
			/>
		</div>
	);
};

export default Game;
