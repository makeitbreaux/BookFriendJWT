const Router = require("express").Router;
const router = new Router();
const client = require("../db")
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// * REGISTER USER
router.post("/register", validInfo, async (req, res) => {
        //1. DESTRUCTURE REQ.BODY => (NAME, EMAIL, PASSWORD)
        const {user_first_name, user_last_name, user_email, user_password} = req.body;
    try {
        // 2. CHECK IF USER EXISTS => (IF USER EXISTS, THROW ERROR)
        const user = await client.query(`SELECT * FROM users WHERE user_email = $1`, [user_email]);

        if(user.rows.length > 0) {
            return res.status(401).json("User Already Exists");
        }
        
        //3. BCRYPT USER PASSWORD
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(user_password, salt);

        //4. ENTER THE NEW USER INTO DB
        let newUser = await client.query(`INSERT INTO users (user_first_name, user_last_name, user_email, user_password) VALUES ($1, $2, $3, $4) RETURNING *`, [user_first_name, user_last_name, user_email, bcryptPassword]);
        
        //5. GENERATING OUR JWT TOKEN
        const token = jwtGenerator(newUser.rows[0].user_id);
        return res.json({token});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
        return;
    }
})

// * LOGIN ROUTE
router.post("/login", validInfo, async (req, res) => {
    //1. DESTRUCTURE REQ.BODY => (EMAIL, PASSWORD)
    const {user_email, user_password} = req.body;
    
    try {
        //2. CHECK USER DOESN'T EXIST => (IF NOT THROW ERROR)
        const user = await client.query(`SELECT * FROM users WHERE user_email = $1`, [user_email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password and/or Email incorrect");
        }

        //3. CHECK IF INCOMING PASSWORD === DB PASSWORD
        const validPassword = await bcrypt.compare(user_password, user.rows[0].user_password);

        if (!validPassword) {
            return res.status(401).json("Password and/or Email is incorrect")
        }

        //4. GIVE USER JWT TOKEN
        const token = jwtGenerator(user.rows[0].user_id);
        return res.json({token});;

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

// * ENSURES USER IS VERIFIED
router.post("/verify", authorization, async (req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;