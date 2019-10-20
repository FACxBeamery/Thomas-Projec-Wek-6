import React from "react";
import styles from "../index.css";
import getUserGitHubPicture from "../utils/getUserGitHubPicture.js";

const GitHubImage = (props) => {
	React.useEffect(() => {
		getUserGitHubPicture(props.player1Username)
			.then((data) => {
				if (data) {
					props.setPlayer1GitHubImageURL(data.avatar_url);
				}
			})
			.catch(
				console.error("Cannot retrieve the GitHub image for Player 1")
			);
	}, []);

	React.useEffect(() => {
		getUserGitHubPicture(props.player2Username)
			.then((data) => {
				if (data) {
					props.setPlayer2GitHubImageURL(data.avatar_url);
				}
			})
			.catch(
				console.error("Cannot retrieve the GitHub image for Player 2")
			);
	}, []);

	return (
		<div className={styles.gitHubImageContainer}>
			<img
				className={styles.gitHubImage}
				src={props.player1GitHubImageURL}
				alt="The GitHub avatar of Player 1"
			/>
			<p className={styles.versus}>vs.</p>
			<img
				className={styles.gitHubImage}
				src={props.player2GitHubImageURL}
				alt="The GitHub avatar of Player 2"
			/>
		</div>
	);
};

export default GitHubImage;
