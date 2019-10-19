import React, { useEffect } from "react";
import styles from "../index.css";

const Square = (props) => {
	useEffect(() => {
		calculateWinner(props.squares);
		isBoardFull(props.squares);
	}, [props.squares]);

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
				props.setWinner(squares[a]);
				return;
			}
		});
	};

	const isBoardFull = (squares) => {
		if (!squares.includes(null)) {
			props.setBoardFull(true);
			return;
		}
	};

	const handleClick = () => {
		if (props.winner) {
			return;
		}

		if (props.boardFull) {
			return;
		}

		if (props.squares[props.id] !== null) {
			return;
		}

		const nextSquares = [...props.squares];
		if (props.p1Turn) {
			nextSquares[props.id] = "X";
		} else {
			nextSquares[props.id] = "O";
		}
		props.setSquares(nextSquares);
		props.setP1Turn(!props.p1Turn);
	};

	return (
		<button className={styles.square} onClick={handleClick}>
			{props.value}
		</button>
	);
};

export default Square;
