const fs=require("fs");
//create file and write data after 2s
setTimeout (()=>{
    fs.writeFile("sample.txt", "This is the sample file creating by node", ()=>{
    console.log("**********File created successfully after 2s***************");
});
}, 2000);

//append file execute after 3s
setTimeout(()=>{
    fs.appendFile(
        "sample.txt",
        "\n second time data insertion This is sample file creating by node",
        ()=>{
            console.log("****data appended successully after 3s*****");
            
        },

    );
},3000);

//read file execute after 5s
setTimeout(()=>{
    
})