const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const StudentSchema = require("../schema/student-schema");
const MentorSchema = require("../schema/mentor-schema");
const jwt = require("jsonwebtoken");

exports.loginStudent = (req, res) => {
  try {
    const { email, password } = req.body.body;
    console.log(req.body.body);

    if (!email || !password)
      return res.json({
        status: 404,
        message: "Please Enter the Credentials",
      });

    StudentSchema.findOne({ email: email })
      .then((result) => {
        if (!result) {
          return res.json({
            status: 400,
            message: "No Record Found",
          });
        }
        bcrypt.compare(password, result.password).then((rep) => {
          if (rep) {
            const token = jwt.sign({ _id: result._id }, "nerdprogrammer");
            console.log(token);
            return res.json({
              status: 200,
              data: {
                token: token,
                user: result,
              },
            });
          }
          res.json({ status: 400, message: "Incorrect Password" });
        });
      })
      .catch((err) => res.json(err));
  } catch (err) {
    res.json(err);
  }
};

exports.loginMentor = (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.json({
        status: 404,
        message: "Please Enter the Credentials",
      });

    MentorSchema.findOne({ email: email })
      .then((result) => {
        if (!result) {
          return res.json({
            status: 400,
            message: "No Record Found",
          });
        }
        bcrypt.compare(password, result.password).then((rep) => {
          if (rep) {
            const token = jwt.sign({ _id: result._id }, "prajjwal");
            res.json({
              status: 200,
              data: {
                token: token,
                user: result,
              },
            });
          }
          res.json({ status: 400, message: "Incorrect Password" });
        });
      })
      .catch((err) => res.json(err));
  } catch (err) {
    res.json(err);
  }
};
