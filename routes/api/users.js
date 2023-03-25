const express = require("express");
const router = express.Router();
let users = require("../../usersDatabase");
const uuid = require("uuid");

//GET Retrieve ALL users REST API
router.get("/", (req, res) => {
  res.json(users); 
  //res.send("<h1>Hello World!</h1>");
  //res.sendFile(path.join(__dirname, "public", "index.html"));
});

//GET Retrieve SINGLE user REST API
router.get("/:id", (req, res) => {
const found = users.some((user) => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

//POST Create Users
router.post("/", (req, res) => {
  res.json(req.body);
});



module.exports = router;