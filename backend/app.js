const express = require("express");
const blogRouter = require("./routes/blogs.routes");
const app = express();

app.use(express.json());
app.use("/api/", blogRouter);
module.exports = app;
