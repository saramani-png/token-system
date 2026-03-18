const express = require("express");
const { callNext, skipToken } = require("../controllers/adminController");
const router = express.Router();

router.post("/callnext", callNext);
router.post("/skip", skipToken);

module.exports = router;