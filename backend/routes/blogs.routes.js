const { getAll, createBlog } = require("../controllers/blogs.controller");
const { authRequire } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/blogs", authRequire, getAll);
router.post("/blog", authRequire, createBlog);

module.exports = router;
