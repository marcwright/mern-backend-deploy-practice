const mongoose = require('../db/connection');

const TodoSchema = new mongoose.Schema({
  description: String,
  done: Boolean
})

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  todos: [TodoSchema]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;