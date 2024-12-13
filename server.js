// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory storage for tasks (replace with a database in production)
let tasks = [];
let taskId = 1; // Simple counter for task IDs

// POST /tasks: Create a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = {
    id: taskId++,
    title,
    description,
    status: "pending"  // Default status
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// GET /tasks: Fetch all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// GET /tasks/:id: Fetch a task by its ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(task => task.id === parseInt(req.params.id));
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// PUT /tasks/:id: Update the task status
app.put('/tasks/:id', (req, res) => {
  const { status } = req.body;
  const task = tasks.find(task => task.id === parseInt(req.params.id));
  if (task) {
    if (["pending", "in-progress", "completed"].includes(status)) {
      task.status = status;
      res.status(200).json(task);
    } else {
      res.status(400).json({ message: "Invalid status" });
    }
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// DELETE /tasks/:id: Delete a task by its ID
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(task => task.id === parseInt(req.params.id));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
