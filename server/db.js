//THIS IS WHAT WE USE INSIDE OUR ROUTES TO MANIPULATE DATA
const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Greyson2010",
    host: "localhost",
    port: 5432,
    database: "bookfriend"
});

module.exports = pool;