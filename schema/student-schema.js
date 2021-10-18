const mongoose = require("mongoose");
const CommonSchema = require("./common-schema");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    default: "M",
  },
  collegeName: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    default: [],
  },
  isStudent: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
