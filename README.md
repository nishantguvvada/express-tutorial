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

## To encapsulate all the related endpoints

- Create a routes folder and create a user.js within routes

```
const express = require('express');
const router = express.Router() // mini application inside app

router.get('/', (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.send("User New Form")
});

module.exports = router;
```

- The code within user.js signifies a mini application inside app
- The router can be exported to the main app and used : app.use('/user', router);

## Using variable path parameter

- Use req.params.parameter_name to access variable path parameter from the url
- The routes within the file are executed in order of listing. Always put a static route above dynamic routes. Else 'new' will be considered an id for the endpoint: 'user/new'

## Chaining endpoints - update/delete/get

- Instead of having separate endpoint implementations for get, update and delete for the same url, example: router.get("/:id"..), router.put("/:id"..), router.post("/:id"..) etc, endpoints can be chained:

```
router.route("/:id").get((req, res) => {...}).post((req, res) => {...})
```

## param function

- param function runs between the request and the response.
- param function has req, res, next and the param itself
- calling next() executes the next code in line

```
router.param("id", (req, res, next, id) => {
	console.log(id)
})
```

- Request -> Routes -> param function -> Response
- param function is a type of middleware

## Middleware

- every middleware takes in request, response and next parameters
- To use the middleware in every route, place it on the top
- To use the middleware in specific route, place it before (req, res) function within the route

## Parse Json from the body

```
app.use(express.json())
```

## Parse Query Paramters

```
req.query.name
```
