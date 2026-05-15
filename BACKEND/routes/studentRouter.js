const addStudent=require("../controller/studentController")
const express=require("express");
const studentModel = require("../model/StudentModel");
const router=express.Router();

router.post("/add-student",addStudent);

module.exports=router;
