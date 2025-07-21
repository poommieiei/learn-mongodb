const EmployeesModel = require('../models/employees.model');

module.exports = {
    getEmployees: async (req, res) => {
        try {
            const employeesModel = new EmployeesModel();
            const employees = await employeesModel.getAllEmployees();
            res.status(200).json(employees);
            
        } catch (error) {
            console.error('Error fetching employees:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getEmployeeById: async (req, res) => {
        try {
            const employeesId = req.params.id;
            console.log(employeesId);
            
            
            const employeesModel = new EmployeesModel();
            const employee = await employeesModel.getEmployeeById(employeesId);
            res.status(200).json(employeesId);
            // res.send(req.params.id);
        } catch (error) {
            console.error('Error fetching employee by ID:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

}

