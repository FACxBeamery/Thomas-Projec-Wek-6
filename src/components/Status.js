import React from "react";
import styles from "../index.css";

const Status = (props) => {
	if (props.calculateWinner(props.squares)) {
		const winner = props.calculateWinner(props.squares);

		if (winner === "X") {
			return (
				<div>
					<p className={styles.status}>
						{"Congratulations Player 1!"}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<p
						className={styles.status}
					>{`Congratulations Player 2!`}</p>
				</div>
			);
		}
	}

	if (props.isBoardFull(props.squares)) {
		return (
			<div>
				<p className={styles.status}>
					{"It's a draw! Have another go!"}
				</p>
			</div>
		);
	} else {
		if (props.p1Turn) {
			return (
				<div>
					<p className={styles.status}>
						{"Player 1, it's your turn!"}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<p className={styles.status}>
						{"Player 2, it's your turn!"}
					</p>
				</div>
			);
		}
	}
};

export default Status;
