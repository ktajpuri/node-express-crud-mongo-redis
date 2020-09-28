const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send('ok')
  } catch (e) {
    res.status(500);
    res.send(e)
  }
})
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users)
  } catch (e) {
    res.send(e);
  }
})
router.get('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    res.send(user)
  } catch (e) {
    res.status(500).send(e);
  }
})

router.patch('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true
    })

    if (!user) {
      return res.status(404).send();
    }
    res.send(user)
  } catch (e) {
    res.status(500).send(e);
  }
})

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user)
  } catch (e) {
    res.status(500).send(e);
  }
})


module.exports = router;
