const express = require("express");
const router = express.Router();
const loginController = require("../../controllers/auth.controller");
const authMiddleware = require("../../helpers/middlewares/auth.middleware");

router.post("/login", loginController.login);

//router.post("/register", loginController.register);


module.exports = router;