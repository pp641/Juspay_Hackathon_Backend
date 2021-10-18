const router = require("express").Router();
const { createStudentAccount } = require("../models/create-student-account");
const { createMentorAccount } = require("../models/create-mentor-account");
const { loginMentor, loginStudent } = require("../models/login");
const { requireLogin } = require("../controllers/requireLogin");
const { createNewSkill } = require("../models/create-new-skill");
const { addNewSkill } = require("../models/add-new-skill");
const { getAllSkills } = require("../models/get-all-skills");

router.post("/createStudent", createStudentAccount);
router.post("/login", loginStudent);
router.get("/createSkill", createNewSkill);
router.post("/addSkill", requireLogin, addNewSkill);
router.get("/fetchSkills", getAllSkills);
module.exports = router;
