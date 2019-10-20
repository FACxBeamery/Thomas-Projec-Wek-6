// import token from "../token.js";

const token = "2e61ba30579d21b186653b454439839f1b5d6a48";

const getUserGitHubPicture = (username) => {
	return fetch(
		`https://api.github.com/users/${username}?access_token=${token}`
	)
		.then((response) => {
			if (response.status !== 200) {
				console.error(
					"An error has occurred when retrieving the player's GitHub user data"
				);
				return;
			}
			return response.json();
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export default getUserGitHubPicture;
