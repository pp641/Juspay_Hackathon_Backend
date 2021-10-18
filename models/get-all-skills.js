const mongoose = require("mongoose");
const SkillSchema = require("../schema/skill-schema");

exports.getAllSkills = (req, res) => {
  SkillSchema.find({})
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((err) => {
      return res.json(err);
    });
};
