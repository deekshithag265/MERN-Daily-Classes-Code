const http=require('http')
const port=5000;
const userDetails={
    name:"Admin",
    email:"admin@gmail",
    password:"admin@123"
};

//server creation
const server=http.createServer((req, res)=>{
    res.end(JSON.stringify(userDetails))
});

const options={
    path:'/getusers'
}

const req=http.request("http://localhost:5000/getusers",(res)=>{
    console.log("user Response");
    res.on("end", () => {
        console.log("get users");
    })
})
req.end();

server.listen(port, () => {
    console.log("Server running on port:", port);
});