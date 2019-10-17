import React from "react";
import styles from "../index.css";

const Square = (props) => {
	return (
		<button
			className={styles.square}
			onClick={() => {
				const nextSquares = [...squares];
				squares[props.value] = "X";
				setSquares(nextSquares);
			}}
		>
			{props.value}
		</button>
	);
};

const Board = (props) => {
	const status = "Next player: X";
	return (
		<div>
			<div className={styles.status}>{status}</div>
			<div className={styles.boardRow}>
				<Square value={0} />
				<Square value={1} />
				<Square value={2} />
			</div>
			<div className={styles.boardRow}>
				<Square value={3} />
				<Square value={4} />
				<Square value={5} />
			</div>
			<div className={styles.boardRow}>
				<Square value={6} />
				<Square value={7} />
				<Square value={8} />
			</div>
		</div>
	);
};

const Game = (props) => {
	const [squares, setSquares] = React.useState(Array(9).fill(null));
	return (
		<div>
			<Board />
		</div>
	);
};

export default Game;
