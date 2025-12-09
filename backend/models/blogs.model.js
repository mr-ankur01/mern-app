const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    body: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("blogs", blogsSchema);
