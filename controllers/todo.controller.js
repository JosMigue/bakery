const Todo = require('../models/todo.model');
const User = require('../models/user.model');
exports.create = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const todo = await Todo.create({ title, description, completed, userId: req.user.userId });
    res.status(201).json(
        { message: 'Todo created successfully', todo }
    );
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.getAll = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.user.userId });
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.delete = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findOneAndDelete({ _id: todoId, userId: req.user.userId });
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

