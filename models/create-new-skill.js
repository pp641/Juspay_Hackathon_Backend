const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SkillSchema = require("../schema/skill-schema");

exports.createNewSkill = async (req, res) => {
  try {
    const { skill } = req.body;
    if (!skill) return res.send("Please Enter The Skill");
    StudentSchema.find({ skill : skill }).then((resp) => {
      if (!resp)
        return res.send({
          status: 404,
          message: "This Skill Already Has  Registered",
        });
    });
    let newUser = new SkillSchema(req.body);
    await newUser
      .save()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } catch (err) {
    return res.send({
      status: 404,
      message: "Error occured",
    });
  }
};
