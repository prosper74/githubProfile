// this is the github access token
// const accessToken = process.env.REACT_APP_ACCESS_TOKEN

// query to choose the data we want to get from github GraphQL API
export const getQuery = (githubUserName) => `query {
	user(login: "${githubUserName}") {
			avatarUrl
			name
			bio
			login
			location
			createdAt
			url
			twitterUsername
			followers {
				totalCount 
			}
			following {
				totalCount 
			}
			repositories(last: 10) {
				nodes {
					name
					url
					createdAt
					stargazerCount
					forkCount
					description
					diskUsage
					primaryLanguage {
						name
						color
					}
				}
			}
	}
}
`;

// github graphql API end point
export const baseUrl = "https://api.github.com/graphql";

// github graphql API header: this is where you put your github access token
export const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + process.env.REACT_APP_ACCESS_TOKEN,
};
