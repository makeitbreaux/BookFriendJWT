const router = require("express").Router();
const pool = require("../db");


// * GET USER PROFILE ROUTE
router.get("/users", async (req, res) => {
    try {
    const results = await pool.query(`SELECT * FROM users`);
    return res.json({ users: results.rows })

} catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
}
})

router.get("/users/:id", async (req, res) => {
    try{
    const {id} = req.params;
    const res = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
    return res.send({ user: results.rows[0] })
} catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
}
  })

// * USER PROFILE EDIT ROUTE
router.put("/users", async (req, res) => {
    try {
    const {user_first_name, user_last_name, password} = req.body;
    const id = req.params.id;
    //3. UPDATE THE USER IN DB
    const results = await pool.query("UPDATE users SET user_first_name = $1, user_last_name = $2, user_password = $3 WHERE user_id = $4 RETURNING *", [user_first_name, user_last_name, password, id])
    return res.send({ user: results.rows[0] })
    } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
}});

module.exports = router;