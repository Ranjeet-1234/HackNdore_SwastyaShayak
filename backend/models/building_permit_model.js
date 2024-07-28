const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
additionalParkingType:{type:Boolean, require:true},
buildingHeight: {type:Number, require:true},
buildingUse:{type:String, require:true},
cornerPlotFlag:{type:Boolean, require:true},
designCompliance:{type:Boolean, require:true},
electricLineDistanceCompliance:{type:Boolean, require:true},
grossPlotArea:{type:Number, require:true},
landUse:{type:String, require:true},
mandatoryDocuments:{type:String, default:null, require:true},
netPlotArea:{type:Number, require:true},
proposedGroundCoverage:{type:Number, require:true},
provisionForDivyand:{type:Boolean, require:true},
roadWidth:{type:Number, require:true},
typeOfDevelopment:{type:String, require:true},
},{timestamps:true});

const buildingmodel = mongoose.model('building_permits', buildingSchema);

module.exports = buildingmodel;
