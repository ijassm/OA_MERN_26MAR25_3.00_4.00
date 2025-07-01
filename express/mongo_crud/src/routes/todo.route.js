const express = require("express");
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller");
const router = express.Router();

router.get("/get", getTodos)

router.post("/create", createTodo)

router.put("/update/:id", updateTodo)

router.delete("/delete/:id", deleteTodo)

module.exports = router;