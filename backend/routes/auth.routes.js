const { login, sign } = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/login", login);
router.post("/sign", sign);

module.exports = router;
