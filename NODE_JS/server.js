const {display, test, name} = require("./model");
console.log("This is server.js File");
display();
const testResult = test();
console.log(testResult);
console.log(name);

console.log("-------------------------------");

// ✅ Fixed import - removed 's' from displayUserBasedEmail
const {displayUser, postUsers, deleteUser, displayUserBasedEmail,updateName} = require("./store/UserStorage");

console.log("before post users:", displayUser());

postUsers({name: "ravi", email: "ravi@gmail.com"});
postUsers({name: "sai", email: "sai@gmail.com"});
postUsers({name: "raju", email: "raju@gmail.com"});

console.log("after post users:", displayUser());

deleteUser("sai");
console.log("after delete User", displayUser());
updateName("Ravi Kumar","ravi@gmail.com")
console.log("Email: ravi@gmail.com", displayUserBasedEmail('ravi@gmail.com'));
