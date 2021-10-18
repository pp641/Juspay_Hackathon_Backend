const mongoose = require("mongoose");

const commonSchema = new mongoose.Schema(
  {
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
  },
  {
    discriminatorKey: "common",
  }
);

module.exports = mongoose.model("Common", commonSchema);
