const express = require("express");
const cors = require ('cors');
const mongoose = require("mongoose");
const process = require("process");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;
const userRoute = require("./routes/user");
const upRoute = require("./routes/upload.js");
const certificateRoute = require("./routes/certificate.js");

mongoose.connect("mongodb://127.0.0.1:27017/HackIndore")
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log("some problem in connecting with server",err);
})

app.use("/user",userRoute);
app.use("/upload",upRoute);
app.use("/certificate",certificateRoute);
//starting up the server
app.listen(8000,()=>{
    console.log("server is up and running "+ PORT );
})
