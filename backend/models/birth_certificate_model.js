const mongoose = require('mongoose');
const birthSchema = new mongoose.Schema({
  
childName:{type:String, require:true},
dateOfBirth: {type:Date, require:true},
documents:{type:String,default:null, require:true},
gender:{type:String, require:true},
informantAddress:{type:String, require:true},
informantContact:{type:Number, require:true},
informantName:{type:String, require:true},
informantRelation:{type:String, require:true},
parentAddress:{type:String, require:true},
parentContact:{type:Number, require:true},
parentName:{type:String, require:true},
placeOfBirth:{type:String, require:true},
},{timestamps:true});

const birthmodel = mongoose.model('birth_certificates', birthSchema);

module.exports = birthmodel;