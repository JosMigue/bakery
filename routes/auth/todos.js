const express = require("express");
const router = express.Router();
const todosController = require("../../controllers/todo.controller");
const authMiddleware = require("../../helpers/middlewares/auth.middleware");

router.get("/todos", authMiddleware, todosController.getAll);
router.post("/todos/create", authMiddleware, todosController.create);
router.delete("/todos/delete/:id", authMiddleware, todosController.delete);
module.exports = router;