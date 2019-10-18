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

const Square = (props) => {
	return (
		<button
			className={styles.square}
			onClick={() => {
				console.log("Winner is:", calculateWinner(props.squares));
				if (calculateWinner(props.squares)) {
					console.log("Winner found!");
					props.setWinner(calculateWinner(props.squares));
					return;
				}

				console.log("Board full? ", isBoardFull(props.squares));
				if (isBoardFull(props.squares)) {
					console.log("Board full!");
					props.setBoardFull(true);
					return;
				}

				const nextSquares = [...props.squares];
				if (props.p1Turn) {
					nextSquares[props.id] = "X";
				} else {
					nextSquares[props.id] = "O";
				}
				console.log("squares: ", props.squares);
				console.log("nextSquares: ", nextSquares);
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
// 			calculateWinner={props.calculateWinner}
// 			isBoardFull={props.isBoardFull}
// 		/>
// 	);
// };

export default Square;
