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
			return renderStatus(`Congratualtions ${props.player1Username}!`);
		} else {
			return renderStatus(`Congratualtions ${props.player2Username}!`);
		}
	}

	if (props.boardFull) {
		return renderStatus("It's a draw! Have another go!");
	} else {
		if (props.p1Turn) {
			return renderStatus(`${props.player1Username}, it's your turn!`);
		} else {
			return renderStatus(`${props.player2Username}, it's your turn!`);
		}
	}
};

export default Status;
