const express = require('express');
const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');
const Verificationmodel = require("../models/docInfo_models");

const router = express.Router();

// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize upload
const upload = multer({ storage });

// Create uploads directory if not exists
const fs = require('fs');
const { send } = require('process');
const { ConnectionStates } = require('mongoose');
const uploadDir = path.join('C:/Users/Acer/Desktop/indore_backend/uploads');
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

function parseOutput(output) {
  const lines = output.split('\n').map(line => line.trim()).filter(line => line !== '');
  const name = lines.slice(0, 3).join(' ');
  const dobIndex = lines.findIndex(line => line.includes('DOB')) + 1;
  const dob = lines[dobIndex];
  const gender = lines[dobIndex + 1];

  return { name, dob, gender };
}

function calculateVerification(reqBody, parsedData) {
  const mismatches = [];
  let matchCount = 0;

  if (reqBody.name.trim().toLowerCase() === parsedData.name.trim().toLowerCase()) {
      matchCount++;
  } else {
      mismatches.push({ field: 'Name', expected: reqBody.name, actual: parsedData.name });
  }

  if (reqBody.dob.trim() === parsedData.dob.trim()) {
      matchCount++;
  } else {
      mismatches.push({ field: 'DOB', expected: reqBody.dob, actual: parsedData.dob });
  }

  if (reqBody.gender.trim().toLowerCase() === parsedData.gender.trim().toLowerCase()) {
      matchCount++;
  } else {
      mismatches.push({ field: 'Gender', expected: reqBody.gender, actual: parsedData.gender });
  }

  const verificationPercentage = (matchCount / 3) * 100;
  return { verificationPercentage, mismatches };
}

// Upload endpoint
router.post('/', upload.single('file'),(req, res) => {
  // console.log(req.body);
  try {
    const filePath = path.join(`C:/Users/Acer/Desktop/indore_backend/uploads/${req.file.filename}`);
    const pythonFile = path.join("C:/Users/Acer/Desktop/indore_backend/OCR-verify/main.py");

    // Construct the command to execute the Python script with the image file path as an argument
    const command = `python ${pythonFile} "${filePath}"`;

    // Change the working directory to the location of the Python script
    const pythonScriptDirectory = path.dirname(pythonFile);
    process.chdir(pythonScriptDirectory);

    const child = exec(command, async (error, stdout, stderr) => {
      if (error) {
          console.error(`Error: ${error.message}`);
          return;
      }
      // console.log(stdout)
      const parsedData = parseOutput(stdout);
      const { verificationPercentage, mismatches } = calculateVerification(req.body, parsedData);

      const verification = new Verificationmodel({
        name: parsedData.name,
        dob: parsedData.dob,
        gender: parsedData.gender,
        verificationPercentage,
        mismatches,
        filePath: req.file.path
      });

      const result = await verification.save();
      // console.log(result)

      res.send({
        message: 'File uploaded and script executed successfully',
        // name: parsedData.name,
        // dob: parsedData.dob,
        // gender: parsedData.gender,
        // verificationPercentage,
        // mismatches
      });
    });

    child.on('close', (code) => {
        process.chdir(__dirname);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error uploading file', error });
  }
});

router.get("/result", async (req, res) => {
  try {
    const results = await Verificationmodel.find();
    console.log(results);
    res.send({ result:results });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving results", error });
  }
});



module.exports= router;