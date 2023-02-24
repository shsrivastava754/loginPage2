const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const signup = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/signup.html'));
};

const register = (req,res)=>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    
    let saltRounds = 10;
    let hashedPass = bcrypt.hashSync(password,saltRounds);
    
    let obj = {
        username: username,
        email:email,
        password:hashedPass
    };

    let oldData = fs.readFileSync(path.join(__dirname,'../data/loginData.json'));
    let oldObjs = JSON.parse(oldData);
    console.log("Data:",oldObjs);
    oldObjs.push(obj);

    let newData = JSON.stringify(oldObjs);
    fs.writeFile('./data/loginData.json',newData,err=>{
        if(err){
            throw err;
        }
        res.sendFile(path.join(__dirname,'../views/registerSuccessfull.html'));
    });

    console.log(obj);
};

module.exports.signup = signup;
module.exports.register = register;