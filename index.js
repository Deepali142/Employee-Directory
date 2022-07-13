const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/employee');

mongoose.connect('mongodb://localhost/EmployeeInfo')
.then(() =>{
    console.log("Database connected");
}).catch((err) =>{
    console.log("couldnt connect");
});

const app = express();
app.use(bodyParser.json());
app.use('/Employee',router)

app.listen(3200,() =>{
    console.log("The port is running at 3200");
});