const homeController = require("../controllers/home.controller");

const express = require("express");
const router = express.Router();
router.get("/", homeController.index);

module.exports = router;
