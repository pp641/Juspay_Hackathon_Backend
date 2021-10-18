const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const MentorSchema = require("../schema/mentor-schema");
const jwt = require("jsonwebtoken");

exports.createMentorAccount = (req, res) => {
  try {
    const { firstName, lastName, age, dob, gender, email, password, skills } =
      req.body.body;
    if (
      !firstName ||
      !lastName ||
      !age ||
      !dob ||
      !gender ||
      !email ||
      !password ||
      !skills
    )
      return res.json({
        status: 404,
        message: "Please Fill All The Details",
      });
    console.log(req.body.body);

    MentorSchema.findOne({ email: email }).then((resp) => {
      if (resp)
        return res.json({
          status: 404,
          message: "This Email Account  Already Has Been  Registered",
        });

      bcrypt.hash(password, 10).then(async (newpassword) => {
        req.body.body.password = newpassword;
        let newUser = new MentorSchema(req.body.body);
        console.log(newUser);
        newUser
          .save()
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      });
    });
  } catch (err) {
    return res.json({
      status: 404,
      message: "Error occured",
    });
  }
};
