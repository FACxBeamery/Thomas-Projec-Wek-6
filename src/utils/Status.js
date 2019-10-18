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

const Status = (props) => {
	if (calculateWinner(props.squares)) {
		const winner = calculateWinner(props.squares);
		return (
			<div>
				<p className={styles.status}>{`Congratulations ${winner}!`}</p>
			</div>
		);
	}

	if (isBoardFull(props.squares)) {
		return (
			<div>
				<p className={styles.status}>
					{"It's a draw! Have another go!"}
				</p>
			</div>
		);
	} else {
		if (props.xTurn) {
			return (
				<div>
					<p className={styles.status}>
						{"Player X, it's your turn!"}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<p className={styles.status}>
						{"Player O, it's your turn!"}
					</p>
				</div>
			);
		}
	}
};

export default Status;
