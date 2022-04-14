
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
//REGISTER AND LOGIN ROUTES
app.use("/authentication", require("./routes/jwtAuth"))

//DASHBOARD ROUTE
app.use("/dashboard", require("./routes/dashboard"));

//USER PROFILE ROUTES
app.use("/users", require("./routes/user"))

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

module.exports = app