const Students=require("../model/StudentModel")

// add student
const addStudent=(req,res)=>{
   try{
    const{name,rollno,branch,phone,email,address}= req.body;
    const newStudent={
        name:name,
        rollno:rollno,
        branch:branch,
        phone:phone,
        email:email,
        address:address,
    };
    Students.insertOne(newStudent);
    res.status(200).json({message:"Student Added Successfully!"})

   }catch(err){
    res.status(500).json({message:'failed to add the student'})
    console.log(err);
    
   }
};

module.exports=addStudent;




// get all students
// get std based on id
// delete std
// update studentDetails
// update only phone No