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
let client = new Client({
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME,
    port: 5432,
})

client.connect();

module.exports = client;