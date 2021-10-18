const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const StudentSchema = require("../schema/student-schema");

exports.createStudentAccount = (req, res) => {
  console.log(req.body.body);
  const {
    firstName,
    lastName,
    age,
    dob,
    gender,
    email,
    password,
    collegeName,
  } = req.body.body;
  if (
    !firstName ||
    !lastName ||
    !age ||
    !dob ||
    !gender ||
    !email ||
    !password ||
    !collegeName
  )
    return res.json("Please Fill All The Details");
  StudentSchema.findOne({ email: email }).then((resp) => {
    if (resp)
      res.json({
        status: 404,
        message: "This Email Account  Already Has Been  Registered",
      });
  });
  bcrypt.hash(password, 10).then(async (newpassword) => {
    req.body.body.password = newpassword;
    let newUser = new StudentSchema(req.body.body);
    console.log(newUser);
    newUser
      .save()
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  });
};
