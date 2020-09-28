
const mongoose = require('mongoose')
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    validate: (val) => {
      if (val < 0) {
        throw new Error('cant be negative')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: (val) => {
      if (!validator.isEmail(val)) {
        throw new Error('invalid email')
      }

    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate: (val) => {
      if (val.includes('password')) {
        throw new Error('invalid password')
      }
    }
  }
})

module.exports = User;