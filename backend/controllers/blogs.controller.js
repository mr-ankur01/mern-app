const blogs = require("../models/blogs.model");

const getAll = async (req, res) => {
  const resData = await blogs.find();
  res.json(resData);
};

const createBlog = async (req, res) => {
  const data = req.body;
  const resblog = await blogs.insertOne(data);
  res.json(resblog);
};

module.exports = { getAll, createBlog };
