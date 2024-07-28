const express = require("express");

const birthmodel = require("../models/birth_certificate_model");
const deathmodel = require("../models/death_certificate_model");
const buildingmodel = require("../models/building_permit_model");

const router = express.Router();

router.post('/birth',(req,res)=>{
    // console.log(req.body);
    birthmodel.create(req.body)
    .then((data)=>{
        res.send({success:true,message:"birth certificate added successfully"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"error certification uploading",error:err})
    })
})

router.post('/death',(req,res)=>{
    // console.log(req.body);
    deathmodel.create(req.body)
    .then((data)=>{
        res.send({success:true,message:"death certificate added successfully"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"error certification uploading",error:err})
    })
})

router.post('/build',(req,res)=>{
    // console.log(req.body);
    buildingmodel.create(req.body)
    .then((data)=>{
        res.send({success:true,message:"building permit added successfully"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({success:false,message:"error permit uploading",error:err})
    })
})


module.exports= router;