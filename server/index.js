
const express = require("express");
const app = express();
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

module.exports = app