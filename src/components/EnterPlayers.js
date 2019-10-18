import React from "react";
import styles from "../index.css";

const EnterPlayers = () => {
	return (
		<form className={styles.form}>
			<fieldset>
				<label htmlFor="player-1">Player 1's GitHub username:</label>
				<input type="text" name="player-one-username" />
			</fieldset>
			<fieldset>
				<label htmlFor="player-2">Player 2's GitHub username:</label>
				<input type="text" name="player-two-username" />
			</fieldset>
		</form>
	);
};

export default EnterPlayers;
