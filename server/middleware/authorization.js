const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {

        //1. DESTRUCTURE THE TOKEN
        const token = req.body.token;
        
        if (!token) {
            return res.status(403).json({ msg: "authorization denied" })
        }
        try {        
            //2. IF YOU DO HAVE JWT, CHECK IF VALID
            const verify = jwt.verify(token, process.env.jwtSecret);

            req.user = verify.user;
            next();
    }   catch (error) {
            console.error(error.message);
            return res.status(401).json({ msg: "Token is not valid" })
    }
}