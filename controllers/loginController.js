const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const alert = require('alert');

const login = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/login.html'));
};

const postLogin = (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    let data = fs.readFileSync(path.join(__dirname,'../data/loginData.json'));
    let objs = JSON.parse(data);
    let flag = false;
    let resObj = {};

    for(let i of objs){
        if(i.username===username){
            flag = true;
            resObj = i;
            break;
        }
    }

    if(flag){
        let verified = bcrypt.compareSync(password,resObj.password);
        if(verified){
            res.sendFile(path.join(__dirname,'../views/index.html'));
        } else {
            alert("Password Mismatch")
            res.sendFile(path.join(__dirname,'../views/login.html'));
        }
    } else {
        alert("Username does not exists")
        res.sendFile(path.join(__dirname,'../views/login.html'));
    }
};

module.exports.login = login;
module.exports.postLogin = postLogin;