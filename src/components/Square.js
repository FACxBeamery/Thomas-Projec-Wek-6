import React from "react";
import styles from "../index.css";

const Square = (props) => {
	return (
		<button
			className={styles.square}
			onClick={() => {
				if (
					props.calculateWinner(props.squares) ||
					props.isBoardFull(props.squares)
				) {
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
