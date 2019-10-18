import React from "react";
// import styles from "../index.css";
import Board from "./Board.js";
import Status from "./Status.js";
import RestartButton from "./RestartButton.js";
import EnterPlayers from "./EnterPlayers.js";

const Game = (props) => {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	const [p1Turn, setP1Turn] = React.useState(true);
	const [winner, setWinner] = React.useState(null);
	const [boardFull, setBoardFull] = React.useState(false);

	return (
		<main>
			<EnterPlayers />
			<Status
				squares={squares}
				p1Turn={p1Turn}
				winner={winner}
				setWinner={setWinner}
				boardFull={boardFull}
				setBoardFull={setBoardFull}
			/>
			<Board
				squares={squares}
				setSquares={setSquares}
				p1Turn={p1Turn}
				setP1Turn={setP1Turn}
				winner={winner}
				setWinner={setWinner}
				boardFull={boardFull}
				setBoardFull={setBoardFull}
			/>
			<RestartButton setSquares={setSquares} setP1Turn={setP1Turn} />
		</main>
	);
};

export default Game;
