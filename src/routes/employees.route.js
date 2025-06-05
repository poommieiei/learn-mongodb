const router = require('express').Router();
const express = require('express');
const employeesController = require('../controller/employees.controller');

router.get('/employees', employeesController.getEmployees);

module.exports = router;