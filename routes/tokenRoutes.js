const express = require("express");
const { generateToken } = require("../controllers/tokenController");
const router = express.Router();

router.post("/generate", generateToken);

module.exports = router;