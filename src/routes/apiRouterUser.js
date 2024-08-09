const userController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();
router.get("/", userController.getAllUser);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;
