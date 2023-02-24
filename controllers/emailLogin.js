const path = require('path');
const bcrypt = require('bcrypt');
const fs = require('fs');
const alert = require('alert');

const emailLogin = (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/email.html'));
};

const postEmail = (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;

    let data = fs.readFileSync(path.join(__dirname,'../data/loginData.json'));
    let objs = JSON.parse(data);
    let flag = false;
    let resObj = {};

    for(let i of objs){
        if(i.email===email){
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
            res.sendFile(path.join(__dirname,'../views/email.html'));
        }
    } else {
        alert("Username does not exists")
        res.sendFile(path.join(__dirname,'../views/email.html'));
    }
};

module.exports.emailLogin = emailLogin;
module.exports.postEmail = postEmail;