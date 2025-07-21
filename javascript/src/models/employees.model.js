const { getDB } = require("../config/dbConnect");
const { ObjectId } = require("mongodb");

module.exports = class EmployeesModel {
  getAllEmployees = async () => {
    try {
      const db = getDB();
      const employeesCollection = db.collection("employees");
      const employees = await employeesCollection.find({}).toArray();
      return employees;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw new Error("Failed to fetch employees");
    }
  };
  getEmployeeById = async (id) => {
    try {
      const db = getDB();
      const employeesCollection = db.collection("employees");  
      const employee = await employeesCollection.findOne({ _id: new ObjectId(id) });
      
      if (!employee) {
        throw new Error("Employee not found");
      }
      
      return employee;
    }
    catch (error) {
      console.error("Error fetching employee by ID:", error);
      throw new Error("Failed to fetch employee");
    }
  }
};
