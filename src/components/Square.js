import React from "react";
import styles from "../index.css";

const Square = (props) => {
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

	return (
		<button
			className={styles.square}
			onClick={() => {
				calculateWinner(props.squares);
				isBoardFull(props.squares);

				if (props.winner) {
					console.log("Winner found! Terminate game!");
					return;
				}

				if (props.boardFull) {
					console.log("Board full! Terminate game!");
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
			}}
		>
			{props.value}
		</button>
	);
};

// const renderSquare = (props, squareIndex) => {
// 	return (
// 		<Square
// 			value={props.squares[squareIndex]}
// 			squares={props.squares}
// 			setSquares={props.setSquares}
// 			xTurn={props.xTurn}
// 			setXTurn={props.setXTurn}
// 			props.calculateWinner={props.props.calculateWinner}
// 			props.isBoardFull={props.props.isBoardFull}
// 		/>
// 	);
// };

export default Square;
