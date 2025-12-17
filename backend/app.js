const express = require("express");
const path = require("path");
const blogRouter = require("./routes/blogs.routes");
const authRouter = require("./routes/auth.routes");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// API routes FIRST
app.use("/api", blogRouter);
app.use("/api/auth", authRouter);

// serve frontend build
app.use(express.static(path.join(__dirname, "dist")));

// React Router fallback (IMPORTANT)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
module.exports = app;
