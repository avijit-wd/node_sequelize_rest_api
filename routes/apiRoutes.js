const router = require("express").Router();

const db = require("../models");

router.get("/all", async (req, res) => {
  const todos = await db.Todo.findAll();
  res.send(todos);
});

router.get("/find/:id", async (req, res) => {
  try {
    const todo = await db.Todo.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(todo);
  } catch (error) {
    console.log(error);
  }
});

router.post("/new", async (req, res) => {
  const newTodo = await db.Todo.create({
    text: req.body.text,
  });
  res.send(newTodo);
});

router.delete("/delete/:id", async (req, res) => {
  await db.Todo.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("Todo destroyed");
});

router.put("/edit", async (req, res) => {
  const todo = await db.Todo.update(
    {
      text: req.body.text,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.send("update success");
});

module.exports = router;
