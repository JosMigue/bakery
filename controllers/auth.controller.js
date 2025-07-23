const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.send(req.body.email + '' + ' registered successfully');
};

exports.login = async (req, res) => {

  try{
    const { email, password } = req.body;
    const user = await User.findOne({ 'email': email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
  
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error); // future error handling process here
    res.status(500).json({ message: 'Internal server error' });
  }
};