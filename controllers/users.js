const express = require("express")
const router = express.Router()
const User = require('../models/User')

// GET ALL USERS
router.get('/', (req, res) => {
  User.find().then(users => res.json(users))
})

// CREATE A NEW TODO
router.post('/:userId/new-todo/', (req, res) => {
  User.findById(req.params.userId).then(user => {
    let newTodo = req.body;
    newTodo.done = false;

    user.todos.push(newTodo);
    user.save();
    res.json(user);
  });  
})

// TOGGLE THE DONE FIELD ON A TODO
router.put("/:userId/update-todo/:todoId", (req, res) => {
  User.findById(req.params.userId).then(user => {

    // FIND THE TODO INDEX
    let todoIndex = user.todos.findIndex(todo => todo._id == req.params.todoId);

    // TOGGLE DONE
    user.todos[todoIndex].done = !user.todos[todoIndex].done
    user.save()

    res.json(user);
  });
});

// DELETE A TODO
router.delete("/:userId/delete-todo/:todoId", (req, res) => {
  User.findById(req.params.userId).then(user => {

    // FIND THE TODO INDEX
    let todoIndex = user.todos.findIndex(todo => todo._id == req.params.todoId);

    // DELETE TODO WITH SPLICE
    user.todos.splice(todoIndex, 1)
    user.save()

    res.json(user);
  });
});

// GET USER BY ID   
router.get('/:id', (req, res) => {
  User.findById(req.params.id).then(user => res.json(user))
})

// CREATE A USER
router.post('/', (req, res) => {
  User.create(req.body).then(newUser => res.json(newUser))
})

// UPDATE A USER    
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updatedUser => res.json(updatedUser))
})

// DELETE A USER
router.delete('/:id', (req, res) => {
  console.log(req.params)
  User.findByIdAndDelete(req.params.id).then(deletedUser => res.json(deletedUser))
})

// USER FOO
router.get('/foo', (req, res) => {
  req.json({foo: 'bar'})
})

module.exports = router