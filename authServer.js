// AUTHENTICATION
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

// 1. User first logs in using username and password
// 2. The username is queried through the database and fetches the password if username found
// 3. The hash of the provided password is matched with the stored hash of the password fetched from the query
// 4. Once user has been authenticated, generate a token containing user information and send it back
// 5. User stores the token and sends it on very subsequent requests
// 6. Any request sent by the user containing a token is fronted by a middleware which extracts the token as well as user information from the token and returns back in the request (jwt.verify(token, SECRET, (err, user) => {req.user = user})

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    // authenticate the username first
    const username = req.body.username;
    // once the username has been authenticated, we want to serialize the username into a token

    const user = { name: username }
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    res.json({accessToken: accessToken, refreshToken: refreshToken});

});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '15s' });
}

app.listen(4000) // app is listening on port 3000 for any requests