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
