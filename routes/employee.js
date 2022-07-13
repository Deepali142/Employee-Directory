const express = require('express');

const {createNewEmployeeData,
    EmployeeList,
    sortBySalary,
    sortByName,
    sortByJoiningDate,
    sortByDOB,
    updateById,
    removeEmployeeData,
searchByName,
googleSearch,
insertField} = require('../controller/employee');

const router = express.Router();

router.post('/NewData',createNewEmployeeData);
router.get('/EmployeeList',EmployeeList);
router.get('/sortBySalary',sortBySalary);
router.get('/sortByName',sortByName);
router.get('/sortByJoiningDate',sortByJoiningDate);
router.get('/sortByDOB',sortByDOB);
router.put('/updateDetail',updateById);
router.delete('/removeEmployee',removeEmployeeData);
router.get('/searchName',searchByName);
// router.get('/googleSearch',googleSearch);
router.get('/insertField',insertField);

module.exports = router;