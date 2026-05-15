const express=require("express");
const app=express();
const PORT=5000;
const connection=require("./config/db")
app.use(express.json)
const studentRouter=require("./routes/studentRouter");
app/use("/students",studentRouter)

app.listen(PORT,()=>{
    console.log("server is running on port",PORT);   // start the web server and begin accepting incoming network requests
    console.log("DB CONNECTED SUCCESSFULLY!");
    
})
