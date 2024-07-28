const mongoose = require('mongoose');

const mismatchSchema = new mongoose.Schema({
  field: { type: String, required: true },
  expected: { type: String, required: true },
  actual: { type: String, required: true }
});

const verificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  verificationPercentage: { type: Number, required: true },
  mismatches: [mismatchSchema],  // Use the mismatch schema
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Verificationmodel = mongoose.model('docs', verificationSchema);

module.exports = Verificationmodel;
