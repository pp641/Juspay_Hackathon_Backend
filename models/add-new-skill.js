const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SkillSchema = require("../schema/skill-schema");

exports.addNewSkill = (req, res) => {
  const { skill } = req.body;
  SkillSchema.findOne({ skill: skill }).then((resp) => {
    if (!resp) {
      var newUser = new SkillSchema({ skill: skill });
      newUser
        .save()
        .then((res) => res)
        .catch((err) => err);
      req.user.skills.push(newUser);
      req.user.save();
      return res.json(req.user);
    }
    console.log(resp);
    let index = req.user.skills.indexOf(resp._id);
    console.log("this is", index);
    if (index === -1) {
      req.user.skills.push(resp);
      req.user.save();
    }
    return res.json(req.user);
  });
};
