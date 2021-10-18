const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const MentorSchema = require("../schema/mentor-schema");
const StudentSchema = require("../schema/student-schema");
exports.requireLogin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "You must be logged in" });
  }
  const token = authorization;
  jwt.verify(token, "prajjwal", (err, data) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged inn" });
    }
    const { _id } = data;
    if(data.isStudent){
        StudentSchema.findById(_id).then((userdata) => {
            req.user = userdata;
            next();
          });
    }else{
        MentorSchema.findById(_id).then((userdata) => {
            req.user = userdata;
            next();
          });
    }
    
  });
};
