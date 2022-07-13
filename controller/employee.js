const Employee = require('../model/employee');
exports.createNewEmployeeData = async (req, res) => {
    const{name,
       mobile,
       address,
       salary,
       department,
       Jobtitle,
       dateofjoining,
       DOB} = req.body;
 
    if (!name && !mobile && !address && !salary && !department && !Jobtitle && !dateofjoining && !DOB) {
       return res.send("Fields cannot be empty");
    };
    const employee = new Employee({
       name:name ,
       mobile:mobile ,
       address:address ,
       salary:salary ,
       department:department ,
       Jobtitle:Jobtitle ,
       dateofjoining: dateofjoining,
       DOB: DOB,
    })
 
    employee.save().then(data => {
       return res.send({
          message: "New Employee created successfully!!",
          employee: data
       });
    }).catch(err => {
       return res.send({ message: err.message });
    });
};

exports.EmployeeList = async(req,res)=>{
   await Employee.find()
   .then((data)=>{
      return res.send(data)
   }).catch((err) =>{
    return res.send(err)
   })
};

exports.sortBySalary = async(req,res) =>{
    await Employee.find().sort({salary:1})
    .then((data) =>{
        return res.send(data)
    }).catch((err) =>{
     return res.send(err)
    })
};

exports.sortByName = async(req,res) =>{
    await Employee.find({"name":{"$exists":true}}).sort({name:1})
    .then((data) =>{
        return res.send(data)
    }).catch((err) =>{
     return res.send(err)
    })
};

exports.sortByJoiningDate = async(req,res) =>{
    await Employee.find().sort({dateofjoining:-1})
    .then((data) =>{
         return res.send(data)
    }).catch((err) =>{
        return res.send(err)
    })
};

exports.sortByDOB = async(req,res) =>{
    await Employee.find().sort({DOB:1})
    .then((data) =>{
         return res.send(data)
    }).catch((err) =>{
        return res.send(err)
    })
};

exports.updateById = async(req,res) =>{
    var id = req.body.id;
    if(id==null || id==undefined || id==''){
        return res.send('Please Enter Employee ID')
    }
    await Employee.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    .then((data) =>{
        return res.status(200).send({data,message:'Employee data updated'})
   }).catch((err) =>{
       return res.status(400).send(err)
   })
};

exports.removeEmployeeData = async(req,res) =>{
    var id = req.body.id;
    if(id==null || id==undefined || id==''){
        return res.send('Please Enter Employee ID')
    }
    await Employee.findOneAndDelete({_id:id})
    .then((data) =>{
        return res.send({data,message:'Employee data deleted successfully'})
   }).catch((err) =>{
       return res.send(err)
   })
};

exports.searchByName = async (req, res) => {
    const name = req.body.name;
    Employee.find({'name': {$regex:name, $options:'i'}})
    .then(result=>{
        if(result.length == 0){
            res.send("Name Not Found !!")
        }
        res.send(result)
    }).catch(err=>{
        console.log(err)
        res.send(err)
    })
};

exports.searchByRange = async(req,res)=>{
    var N1 = req.body.N1;
    var N2 = req.body.N2;
    await Employee.find({salary:{$gt:N1,$lte:N2}})
    .then((data) =>{
        return res.send(data)
   }).catch((err) =>{
       return res.send(err)
   })
};

// exports.googleSearch = async(req,res) =>{
//     var searchName = req.body.searchName
//     var searchNameList = []
//     await Employee.find()
//     .then(data=>{
//         data.forEach(item=>{
//             if(searchName[0] == item.name[0]){
//                 console.log(item)
//                 searchNameList.push(item)
//             }
//         })
//         res.send(searchNameList)   
//     }).catch(err=>{
//         console.log(err)
//         res.send(err)
//     })
// };

exports.insertField = (req, res) => {
    Employee.updateMany({}, { $set: { companyName: "Infograins" } })
       .then(Employee => {
          console.log(Employee)
          return res.json(Employee);
       }).catch(err => {
          console.log(err);
          return res.json(err);
       });
};

exports.insertField = (req, res) => {
    Employee.updateMany({}, { $set: { companyName: "Infograins" } })
    .then(Employee => {
        console.log(Employee)
        return res.json(Employee);
    }).catch(err => {
        console.log(err);
        return res.json(err);
    });
};





