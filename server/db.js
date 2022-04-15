//THIS IS WHAT WE USE INSIDE OUR ROUTES TO MANIPULATE DATA
// const Pool = require("pg").Pool

// const pool = new Pool({
//     user: "pdjfavydvtvggf",
//     password: "670239d9dd1acd2fcb7fb3ff6c19b51c541500a31281bfea25b16fed844fa868",
//     host: "ec2-3-230-122-20.compute-1.amazonaws.com",
//     port: 5432,
//     database: "dcv1g06b0r0kgl"
// });
const { Client } = require("pg");
let DB_URI = "postgres://pdjfavydvtvggf:670239d9dd1acd2fcb7fb3ff6c19b51c541500a31281bfea25b16fed844fa868@ec2-3-230-122-20.compute-1.amazonaws.com:5432/dcv1g06b0r0kgl";
const client = new Client(DB_URI);

module.exports = client;