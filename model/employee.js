const mongoose  = require('mongoose');
const Schema = new mongoose.Schema({
   
    name:{
        type:'string',
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    address:{
        type:'string',
        default:'',
    },
    salary:{
        type:Number,
        required:true,
    },
    department:{
        type:'string',
        required:true,
    },
    Jobtitle:{
        type:'string',
        required:true,
    },
    dateofjoining:{
        type:'string',
        required:true,
    },
    DOB:{
        type:'string',
        required:true,
    },
},
{timestamps:true});

const Employee = new mongoose.model("Employee",Schema);
module.exports = Employee;