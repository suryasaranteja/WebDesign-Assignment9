const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    await userService.registerUser(name, email, password);
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'User logged in' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUser(req, res) {
  console.log('Inside post function for creating user');
  const { name, email, password } = req.body;

  try {
    if (password.length < 6) {
      res.status(400).json({ error: 'Password must be at least 6 characters long' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Name should be at least 6 characters and email should be neu mailid only or user already exists' });
  }
}

async function updateUser(req, res) {
  console.log('Inside put function for updating user');
  const { email, name, password } = req.body;

  try {
    const user = await UserModel.findOne({ $or: [{ email }, { name }] });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    if (name) {
      if (name.length < 4) {
        res.status(400).json({ error: 'Full name must be at least 6 characters long' });
        return;
      }
      user.name = name;
    }

    if (password) {
      if (password.length < 6) {
        res.status(400).json({ error: 'Password must be at least 6 characters long' });
        return;
      }
      user.password = await bcrypt.hash(password, 10);
    }

    if (email && email !== user.email) {
      res.status(400).json({ error: 'User email address cannot be updated' });
      return;
    }

    await user.save();
    res.send('User updated');
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'user name and password should have at least 6 characters' });
  }
}

async function deleteUser(req, res) {
  console.log('Inside delete function for deleting user');
  const { email } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      res.status(404).json({ error: 'User not found (enter email address only for deletion)' });
      return;
    }

    await UserModel.deleteOne({ _id: user._id });
    res.send('User deleted');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Please send a valid delete request' });
  }
}

async function getAllUsers(req, res) {
  console.log('Inside GET function for retrieving user data');

  try {
    const users = await UserModel.find({}, { name: 1, email: 1, password: 1, _id: 0 });
    res.json(users);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'Please send a valid get request' });
  }
}

module.exports = {
  register,
  login,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};
