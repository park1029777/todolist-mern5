const express = require("express");

const Todo = require("../models/todolist");

const router = express.Router();

//  GET todo

router.get("/", (req, res) => {
  res.send("ToDo page");
});

module.exports = router;

// POST todo
// Create todo

router.post("/", async (req, res) => {
  try {
    const newTodo = await Todo.create({ title: req.body.title });
    req.body.title;
    res.send(newTodo);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
