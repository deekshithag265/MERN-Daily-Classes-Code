let a=10;
console.log(a);

function display() {
    console.log("this is display function")
}

const test=()=>{
    const userDetails={
        name:"sai",
        email:"admin@gmail.com",
        phone:1234567890

    }
    return userDetails;
}
module.exports={display,test}


