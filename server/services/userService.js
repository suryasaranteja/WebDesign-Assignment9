const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

async function registerUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new UserModel({
    name,
    email,
    password: hashedPassword,
  });
  return user.save();
}

async function loginUser(email, password) {
  const user = await UserModel.findOne({ email });
  return user;
}

async function updateUserDetails(email, name, password) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return null; // Handle accordingly if user doesn't exist
  }

  if (name) {
    user.name = name.length >= 4 ? name : user.name;
  }

  if (password) {
    user.password = password.length >= 6 ? await bcrypt.hash(password, 10) : user.password;
  }

  await user.save();
  return user;
}

async function deleteUserByEmail(email) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return null; // Handle accordingly if user doesn't exist
  }

  await UserModel.deleteOne({ _id: user._id });
  return user;
}

async function getAllUsers() {
  return await UserModel.find({}, { name: 1, email: 1, password: 1, _id: 0 });
}

module.exports = {
  registerUser,
  loginUser,
  updateUserDetails,
  deleteUserByEmail,
  getAllUsers,
};
