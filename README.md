# React-Github-profile-graphql

## Description

A simple app to fetch github user and display the information in a nice modern card design. It consumes github's API (GraphQL). This is my second react application and since we mostly keep our front-end separate from the logics and only allow communication between app user interface and logics via API, I decided to build on that skill since that's what most of the tasks entails

## Installation

Clone the repository and cd into the project directory  
Run `npm install`  
To run locally, run `npm start` and copy the build folder to your server
Server runs on `PORT 1002`, you can change the port in `package.json` file
Create your github access token, create `.env` file and add the token to the`.env` file
Use `REACT_APP_ACCESS_TOKEN` to name the token in the `.env` file
To deploy, run `npm run build` and copy the build folder to your server

## Usage

Simply enter the github username and click add  
To view more github user's details, click on the card

## Built With

- React - For Layout
- React Router Dom - For Routing
- Rechart - For Charts
- React hook form - For the form
- SCSS - For Styling
- Consumes github's GraphQL API

## Link

Access app via https://githubprofilebyprosper.netlify.app/

## Author

[Prosper Atu]
