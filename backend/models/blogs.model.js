const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    body: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("blogs", blogsSchema);
