import React from "react";
import styles from "../index.css";

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

	winningCombos.forEach((elem) => {
		const [a, b, c] = elem;
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[b] === squares[c]
		) {
			return squares[a];
		}
	});
	return false;
};

const isBoardFull = (squares) => {
	if (!squares.includes(null)) {
		return true;
	} else {
		return false;
	}
};

const renderStatus = (statusMessage) => {
	return (
		<div>
			<p className={styles.status}>{statusMessage}</p>
		</div>
	);
};

const Status = (props) => {
	if (calculateWinner(props.squares)) {
		const winner = calculateWinner(props.squares);

		if (winner === "X") {
			return renderStatus("Congratualtions Player 1!");
		} else {
			return renderStatus("Congratualtions Player 2!");
		}
	}

	if (isBoardFull(props.squares)) {
		return renderStatus("It's a draw! Have another go!");
	} else {
		if (props.p1Turn) {
			return renderStatus("Player 1, it's your turn!");
		} else {
			return renderStatus("Player 2, it's your turn!");
		}
	}
};

export default Status;
