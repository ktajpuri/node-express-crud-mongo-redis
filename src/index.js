const express = require('express');
const app = express();
require('./db/mongoose');
const userRouter = require('./routers/user');
const tasksRouter = require('./routers/tasks');

const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/users', userRouter);
app.use('/tasks', tasksRouter);

app.listen(port, () => {
  console.log('server is listening on ' + port)
})

