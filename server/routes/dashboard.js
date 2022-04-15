const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/*", authorization, async (req, res) => {
    try {
        //REQ.USER HAS THE PAYLOAD
        let payload = res.json(req.user)
        const user = await pool.query(`SELECT * FROM users WHERE user_id = $1`, [payload]);
        return res.json(user.rows[0]);

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;