const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).json({ error: "password not match" });
  }
  const token = jwt.sign(
    { name: user.name, email: user.email, id: user._id },
    process.env.SECRET,
    { expiresIn: "1d" },
  );
  return res.json({ token });
};

const sign = async (req, res) => {
  const userData = req.body;
  const exsits = await User.findOne({ email: userData.email });
  if (exsits) {
    console.log("user return");
    return res.status(401).json({ error: "User already exists" });
  }
  const password = await bcrypt.hash(userData.password, 10);
  const data = { ...userData, password };
  const user = await User.insertOne(data);
  const token = jwt.sign(
    { name: user.name, email: user.email, id: user._id },
    process.env.SECRET,
    { expiresIn: "1d" },
  );
  return res.json({ token });
};

module.exports = { login, sign };
