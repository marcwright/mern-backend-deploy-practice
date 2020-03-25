const mongoose = require('./connection')
const User = require('../models/User')

User.deleteMany({})
User.collection.insertMany([
  { "name": "Diesel", "email": "diesel@dog.com" },
  { "name": "Schmitty", "email": "schmitty@schmit.com" }
])
.then(users => console.log(users))
.catch(err => console.log(err))	