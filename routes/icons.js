const { Router } = require("express");
const icons = require("../controllers/icons");
const router = Router();

router.get("/api/icons", icons.get);

module.exports = router;
