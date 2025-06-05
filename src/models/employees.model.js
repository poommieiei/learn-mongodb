const { getDB } = require("../config/dbConnect");

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
};
