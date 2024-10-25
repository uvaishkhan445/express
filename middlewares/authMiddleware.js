// An example middleware to check if a user is authenticated (pseudo-code)
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: "Unauthorized access" });
  }
  // Process token (for example, using JWT)
  next();
};
