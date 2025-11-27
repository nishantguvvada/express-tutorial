const express = require('express');
const router = express.Router() // mini application inside app

router.get('/', (req, res) => {
    res.send("User List");
});

router.get("/new", (req, res) => {
    res.send("User New Form")
});


// INSTEAD OF HAVING SEPARATE IMPLEMENATIONS, WE CAN CLUB ENDPOINTS
// router.get('/:id', (req, res) => {
//     res.send(`Get User with ID: ${req.params.id}`);
// });

// router.post('/:id', (req, res) => {
//     res.send(`Get User with ID: ${req.params.id}`);
// });

// router.update('/:id', (req, res) => {
//     res.send(`Get User with ID: ${req.params.id}`);
// });

// CLUBBED ENDPOINTS
router.route("/:id").get((req, res) => {console.log(req.user); res.send("Get Endpoint")}).post((req, res) => {res.send("Post Endpoint")}).delete((req, res) => {res.send("Delete Endpoint")})

const users = [{name: "Kyle"}, {name: "Sally"}];

router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;