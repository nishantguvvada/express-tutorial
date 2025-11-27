// const express = require('express');

// const app = express();
// app.use(logger);

// // app.set('view engine', 'ejs');

// app.get("/", (req, res) => {
//     res.status(200).json({response:"200 status message"});
//     // res.render('index');
// });

// const userRouter = require('./routes/user');

// app.use('/user', userRouter)

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

// app.listen(3000) // app is listening on port 3000 for any requests

// AUTHENTICATION
require('dotenv').config();
const express = require('express');
const authenticateToken = require('./authentication');


const app = express();
app.use(express.json());

const post = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
]

app.get('/posts', authenticateToken, (req, res) => {
    res.json(post.filter(post => post.username === req.user.name))
});

app.listen(3000) // app is listening on port 3000 for any requests