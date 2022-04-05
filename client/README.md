# Book Friend

An app to search your favorite authors and the books that they have written!

#### Register

![Register](https://github.com/makeitbreaux/BookFriendJWT/blob/master/public/RegisterBF.png)

#### Dashboard

![Dashboard](https://github.com/makeitbreaux/BookFriendJWT/blob/master/public/DashboardBF.png)

#### Author Search

![AuthorSearch](https://github.com/makeitbreaux/BookFriendJWT/blob/master/public/AuthorSearchBF.png)

#### Works Search

![WorksSearch](https://github.com/makeitbreaux/BookFriendJWT/blob/master/public/WorksSearchBF.png)

## Description

This is my final capstone project for Springboard's Software Engineering Career Track. The goal of my application is to have a place where avid readers can search all of their favorite authors and see the other books their favorite author has written.

## Features

Logged in, users have access to:

-   Search for their favorite author's information
-   Search for all of the other books the specified author has written

## User Flow

-   A user can log in or create a new account; upon successful registration, user is redirected to app index page
-   Upon searching for their favorite author, the user will be shown all author information and/or all of the book titles the author has written
-   At any point, using the navigation bar, the user can update their profile information

## API

The data I used was from the [Open Library](https://openlibrary.org/developers/api).

## Technologies Used

The main technologies I used to build Book Friend were: [React](https://github.com/facebook/react) for the frontend framework, [Express](https://github.com/expressjs/express) as the Node framework, [Node](https://github.com/nodejs/node) as the runtime environment, and [PostgreSql](https://github.com/postgres/postgres) as the database. To test that the application runs as it should, I used [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).

## Looking Forward

While the capstone project hit all of the specified requirements, there are a few more features I'd like to add to enhance the User Experience:

-   Shop: Users will be able to purchase hard copies of their books and ebook versions
-   Functionality to save all of their favorite authors

## Getting Started with BookFriend

### `"npm start" : "react-scripts start"`,

The app is built using `create-react-app` so this command Runs the app in Development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You also need to run the server file as well to completely run the app. The page will reload if you make edits.
You will also see any lint errors in the console.

### `"npm run build": "react-scripts build"`,

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app will be ready to deploy!

### `"npm run test": "react-scripts test"`,

Launches the test runner in the interactive watch mode.

### `"npm run dev": "concurrently "nodemon server" "npm run start"`,

For running the server and app together I am using concurrently this helps a lot in the PERN application as it runs both the server (client and server) concurrently. So you can work on them both together.

### `"serve": "node server"`

For running the server file on you can use this command.

### `npm run serve`
