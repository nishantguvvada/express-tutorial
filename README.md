# EXPRESS.JS

## Create a package json

npm init -y

## Install libraries

npm i express

## Install dev dependency

npm i --save-dev nodemon

## Create an endpoint

```
const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({response:"200 status message"})
});

app.listen(3000);
```

## Download a file

```
res.download('server.js');
```
