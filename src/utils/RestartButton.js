import React from "react";
import styles from "../index.css";

const RestartButton = (props) => {
	return (
		<button
			className={styles.restartButton}
			onClick={() => {
				props.setSquares(Array(9).fill(null));
				props.setXTurn(true);
			}}
		>
			Restart game!
		</button>
	);
};

export default RestartButton;
