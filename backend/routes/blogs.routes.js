const { getAll, createBlog } = require("../controllers/blogs.controller");

const router = require("express").Router();

router.get("/blogs", getAll);
router.post("/blog", createBlog);

module.exports = router;
