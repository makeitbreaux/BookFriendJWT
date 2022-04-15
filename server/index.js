
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');




//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(bodyParser.json());

//ROUTES
//REGISTER AND LOGIN ROUTES
app.use("/authentication", require("./routes/jwtAuth"))

//DASHBOARD ROUTE
app.use("/dashboard", require("./routes/dashboard"));

//USER PROFILE ROUTES
// app.use("/users", require("./routes/user"))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});


module.exports = app