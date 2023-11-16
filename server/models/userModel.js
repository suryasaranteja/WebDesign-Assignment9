// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your user schema fields here
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
