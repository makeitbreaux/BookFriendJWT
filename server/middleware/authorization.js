const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        //1. DESTRUCTURE THE TOKEN
        const token = req.header("token");
        
        if (!token) {
            return res.status(403).json("Not Authorized")
        }
        
        //2. IF YOU DO HAVE JWT, CHECK IF VALID
        const payload = jwt.verify(token, process.env.jwtSecret);
        req.user = payload.user;
        next();
    } catch (error) {
        console.error(error.message);
        return res.status(403).json("Not Authorized")
    }
}