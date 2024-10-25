const db = require("../config/db");

exports.createUser = (userData) => {
  const { name, email, password } = userData;
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, password], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};

exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users";
    db.query(query, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
};
