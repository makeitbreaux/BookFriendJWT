const Router = require("express").Router;
const router = new Router();
const client = require("../db");
const authorization = require("../middleware/authorization");

router.get("/*", authorization, async (req, res) => {
    try {
        //REQ.USER HAS THE PAYLOAD
        // let payload = res.json(req.user)
        const user = await client.query(`SELECT * FROM users WHERE user_id = $1`, [req.user]);
        return res.json(user.rows[0]);

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Server Error");
    }
})

module.exports = router;