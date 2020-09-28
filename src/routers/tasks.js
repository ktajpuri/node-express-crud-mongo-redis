const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks)
  } catch (e) {
    res.send(e);
  }
})
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    res.send(task)
  } catch (e) {
    res.status(500).send(e);
  }
})

router.patch('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    })

    if (!task) {
      return res.status(404).send();
    }
    res.send(task)
  } catch (e) {
    res.status(500).send(e);
  }
})

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(task)
  } catch (e) {
    res.status(500).send(e);
  }
})


module.exports = router;
