const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser); // Route to create a user
router.get("/", getAllUsers); // Route to get all users

module.exports = router;
