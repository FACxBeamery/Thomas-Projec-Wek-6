import React from "react";
import styles from "../index.css";

const EnterPlayers = (props) => {
	const [player1UsernameInput, setPlayer1UsernameInput] = React.useState("");
	const [player2UsernameInput, setPlayer2UsernameInput] = React.useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const gitHubUserRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

		props.setGameState(1);

		if (gitHubUserRegex.test(player1UsernameInput)) {
			props.setPlayer1Username(player1UsernameInput);
		} else {
			props.setPlayer1Username(false);
		}

		if (gitHubUserRegex.test(player2UsernameInput)) {
			props.setPlayer2Username(player2UsernameInput);
		} else {
			props.setPlayer2Username(false);
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<fieldset>
				<label htmlFor="player-1">Player 1's GitHub username:</label>
				<input
					type="text"
					name="player-one-username"
					onChange={(event) =>
						setPlayer1UsernameInput(event.target.value)
					}
				/>
				{props.player1Username !== false ? null : (
					<div className={styles.invalidUsername}>
						Are you sure? This looks like an invalid GitHub
						username.
					</div>
				)}
			</fieldset>
			<fieldset>
				<label htmlFor="player-2">Player 2's GitHub username:</label>
				<input
					type="text"
					name="player-two-username"
					onChange={(event) =>
						setPlayer2UsernameInput(event.target.value)
					}
				/>
				{props.player2Username !== false ? null : (
					<div className={styles.invalidUsername}>
						Are you sure? This looks like an invalid GitHub
						username.
					</div>
				)}
			</fieldset>
			<button type="submit" name="" className={styles.submitButton}>
				Let's play!
			</button>
		</form>
	);
};

export default EnterPlayers;
