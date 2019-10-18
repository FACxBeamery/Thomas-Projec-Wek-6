import React from "react";
import styles from "../index.css";

const renderStatus = (statusMessage) => {
	return (
		<div>
			<p className={styles.status}>{statusMessage}</p>
		</div>
	);
};

const Status = (props) => {
	if (props.winner) {
		if (props.winner === "X") {
			return renderStatus("Congratualtions Player 1!");
		} else {
			return renderStatus("Congratualtions Player 2!");
		}
	}

	if (props.boardFull) {
		return renderStatus("It's a draw! Have another go!");
	} else {
		if (props.p1Turn) {
			return renderStatus("Player 1, it's your turn!");
		} else {
			return renderStatus("Player 2, it's your turn!");
		}
	}
};

export default Status;
