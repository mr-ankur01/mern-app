const jwt = require("jsonwebtoken");

const authRequire = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Not have authorization" });
  const user = jwt.verify(token, process.env.SECRET);
  req.user = user;
  next();
};

module.exports = { authRequire };
