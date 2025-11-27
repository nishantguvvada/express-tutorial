const express = require('express');

const app = express();

// app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.status(200).json({response:"200 status message"});
    // res.render('index');
});

const userRouter = require('./routes/user');

app.use('/user', userRouter)


app.listen(3000) // app is listening on port 3000 for any requests