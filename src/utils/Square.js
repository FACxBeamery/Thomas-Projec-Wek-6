import React from "react";
import styles from "../index.css";

const Square = (props) => {
	return (
		<button
			className={styles.square}
			onClick={() => {
				// if () {
				// 	return;
				// }

				const nextSquares = [...props.squares];
				if (props.xTurn) {
					nextSquares[props.id] = "X";
				} else {
					nextSquares[props.id] = "O";
				}
				console.log("squares: ", props.squares);
				console.log("nextSquares: ", nextSquares);
				props.setSquares(nextSquares);
				props.setXTurn(!props.xTurn);
			}}
		>
			{props.value}
		</button>
	);
};

export default Square;
