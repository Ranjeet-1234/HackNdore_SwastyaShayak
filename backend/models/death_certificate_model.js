const mongoose = require('mongoose');
const deathSchema = new mongoose.Schema({
  
ageAtDeath:{type:Number, require:true},
causeOfDeath: {type:String, require:true},
dateOfDeath:{type:Date, require:true},
deceasedName:{type:String, require:true},
documents:{type:String,default:null, require:true},
gender:{type:String, default:'other', require:true},
informantAddress:{type:String, require:true},
informantContact:{type:Number, require:true},
informantName:{type:String, require:true},
parentAddress:{type:String, require:true},
informantRelation:{type:String, require:true},
placeOfDeath:{type:String, require:true},
},{timestamps:true});

const deathmodel = mongoose.model('death_certificates', deathSchema);

module.exports = deathmodel;

/*ageAtDeath
: 
"20"
causeOfDeath
: 
"hackathon"
dateOfDeath
: 
"2024-07-20"
deceasedName
: 
"shravan"
documents
: 
null
informantAddress
: 
"kaadi khan"
informantContact
: 
"9322797220"
informantName
: 
"shivam"
informantRelation
: 
"wife"
placeOfDeath
: 
"indore" */