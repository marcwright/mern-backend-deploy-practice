const express = require('express');
const app = express();
const usersController = require('./controllers/users');
const cors = require('cors')

//Middleware
app.use(cors())
app.use(express.json());

//Controllers
app.use('/api/users', usersController);

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});