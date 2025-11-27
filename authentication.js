require('dotenv').config();
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1];
    if (token == null) {
        return res.status(400).json({"message":"No token provided."})
    };

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

module.exports = authenticateToken;