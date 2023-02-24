const fs = require('fs');

var data = fs.readFileSync('data/loginData.json');
var obj = JSON.parse(data);
let username = "Shaan";
let password = "123456";
let email = "shaansrivastava2001@gmail.com";
let age = 21;

var newObj = {};
newObj[username] = {
    email:email,
    password:password,
    age:age
};

obj.push(newObj);

var newData = JSON.stringify(obj);
fs.writeFile('data/loginData.json',newData,err=>{
    if(err){
        throw err;
    }
    console.log("New data successfully added to json!!");
});

console.log(obj);