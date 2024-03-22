// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(cors());

// Array to store sign-up information
const users = [];

// Route for sign-up
app.post('/Signup', (req, res) => {
  const { username, email, password } = req.body;
  // Add user to the array
  users.push({ username, email, password });
  res.status(201).json({ message: 'User signed up successfully' });
});

// Route for sign-in validation
app.post('/Signin', (req, res) => {
  const { email, password } = req.body;
  // Find user by email and password
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Sign-in successful' });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
