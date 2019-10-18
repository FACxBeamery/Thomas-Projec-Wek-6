import React from "react";
// import styles from "../index.css";
import Board from "./Board.js";
import Status from "./Status.js";

const Game = (props) => {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [xTurn, setXTurn] = React.useState(true);

	const calculateWinner = (squares) => {
		const winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];

		for (let i = 0; i < winningCombos.length; i++) {
			const [a, b, c] = winningCombos[i];

			if (squares[a] === squares[b] && squares[b] === squares[c]) {
				return squares[a];
			}
		}

		return false;
	};

	const isBoardFull = (squares) => {
		if (!squares.includes(null)) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div>
			<Status
				squares={squares}
				xTurn={xTurn}
				calculateWinner={calculateWinner}
				isBoardFull={isBoardFull}
			/>
			<Board
				squares={squares}
				setSquares={setSquares}
				xTurn={xTurn}
				setXTurn={setXTurn}
				calculateWinner={calculateWinner}
				isBoardFull={isBoardFull}
			/>
		</div>
	);
};

export default Game;
