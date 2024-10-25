const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const result = await User.createUser(req.body);
    res.status(201).json({ message: "User created", userId: result.insertId });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
