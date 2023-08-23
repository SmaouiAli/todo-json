const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let todos = [
  { id: 1, task: 'Sample Task 1', completed: false },
  { id: 2, task: 'Sample Task 2', completed: true },
];

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET one todo by ID
app.get('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const todo = todos.find(t => t.id === todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// POST a new todo
app.post('/todos', (req, res) => {
  const { task, completed } = req.body;
  const newId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  const newTodo = { id: newId, task, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT (create or update) a todo
app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const existingTodo = todos.find(t => t.id === todoId);
  
    if (existingTodo) {
      // Update only the fields that the user sent
      if (req.body.task !== undefined) {
        existingTodo.task = req.body.task;
      }
      if (req.body.completed !== undefined) {
        existingTodo.completed = req.body.completed;
      }
      res.json(existingTodo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  });

// DELETE a todo
app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  const existingTodoIndex = todos.findIndex(t => t.id === todoId);

  if (existingTodoIndex > -1) {
    todos.splice(existingTodoIndex, 1);
    res.json({ message: 'Todo deleted successfully' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});