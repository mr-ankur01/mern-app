const express = require("express");
const blogRouter = require("./routes/blogs.routes");
const authRouter = require("./routes/auth.routes");
const morgan = require("morgan");
const app = express();

app.use(express.static("dist"));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/", blogRouter);
app.use("/api/auth", authRouter);

module.exports = app;
