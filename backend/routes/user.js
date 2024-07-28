const express = require("express");
const  bcryptjs = require("bcryptjs");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");
const usermodel = require("../models/user-model");

const router = express.Router();

router.post("/register",(req,res)=>{
    let user = req.body;

    bcryptjs.genSalt(10,(err,salt)=>{
        if(err === null || err=== undefined){
            bcryptjs.hash(user.password,salt,(err,encp)=>{
                user.password = encp;
                // console.log("encripted pass is",encp);
                usermodel.create(user)
                .then((doc)=>{
                    res.send({message:"admin Registered"})
                })
                .catch((err)=>{
                    console.log(err);
                    res.send({message:"some problem in registration of the admin"})
                })
            })
        }
    }) 
})

router.post("/login",(req,res)=>{
    let usercred= req.body;
    // console.log('request called', usercred)
    usermodel.findOne({username : usercred.username})
    .then((user)=>{
        // console.log(user);
        if(user!== null || user !== undefined){
            bcryptjs.compare(usercred.password,user.password,(err,result)=>{
                if(err === null || err === undefined){
                    if(result === true){
                        jwt.sign({username:usercred.username},"secretkey",(err,token)=>{
                            if(err===null||err===undefined){
                                res.send({success:true,token:token});
                            }
                        })
                
                    }
                    else{
                        res.send({message:"Invalid Password",success:false});
                    }
                }
            })
        }
        else{
            res.send({message:"Username not Found",success:false});
        }
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Invalid username"})
    })
})

// router.post('/sendmail',(req,res)=>{
//     // console.log("endpoint is called",req.body)
//     let data  = req.body;
//     let transport =nodemailer.createTransport({
//         service:"gmail",
//         auth:{
//             user:"rewatkarranjeet123@gmail.com",
//             pass:'gsqy xokm vevr arip'
//         }
//     })
//     let mailbody={
//         from:"rewatkarranjeet123@gmail.com",
//         to:"shivammathapati896@gmail.com",
//         subject:"PreTrail Report",
//         text:'hello'
//     }
//     transport.sendMail(mailbody,(err,info)=>{
//         if(!err){
//             // console.log('email send successfully')
//             res.send({message:'email send Successfull',success:true})
//         }
//         else{
//             console.log(err)
//             res.send({message:"some Problem in sending Email",success:false})
//         }
//     })
// })
module.exports= router;

