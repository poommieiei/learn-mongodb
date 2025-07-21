const router = require('express').Router();
const employeesController = require('../controller/employees.controller');

router.get('/employees', employeesController.getEmployees);

router.get('/employees/:id', employeesController.getEmployeeById);

module.exports = router;