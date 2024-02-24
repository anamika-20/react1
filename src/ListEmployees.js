import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllEmployees, deleteEmployee } from "./employeeState";

const ListEmployees = () => {
  // Select all employees from Redux store
  const employees = useSelector(selectAllEmployees);
  const dispatch = useDispatch(); // Get dispatch function from Redux

  // Function to handle employee deletion
  const handleDeleteEmployee = (employeeId) => {
    dispatch(deleteEmployee(employeeId)); // Dispatch deleteEmployee action
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Container for the list of employees */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl font-semibold p-4 bg-blue-500 text-white">
          List of Employees
        </h2>
        {/* Table for displaying employee data */}
        <table className="w-full">
          {/* Table header */}
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-4">Full Name</th>
              <th className="py-2 px-4">Birthdate</th>
              <th className="py-2 px-4">Department</th>
              <th className="py-2 px-4">Experience (years)</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {/* Map over each employee and display their data */}
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-200">
                {/* Display employee data in each table cell */}
                <td className="py-2 px-4 text-center">{employee.fullName}</td>
                <td className="py-2 px-4 text-center">{employee.birthdate}</td>
                <td className="py-2 px-4 text-center">{employee.department}</td>
                <td className="py-2 px-4 text-center">{employee.experience}</td>
                {/* Actions for editing and deleting employees */}
                <td className="py-2 px-4 flex justify-between items-center">
                  {/* Edit button */}
                  <Link
                    to={`/edit/${employee.id}`}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-700"
                  >
                    Edit
                  </Link>
                  {/* Delete button */}
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Link to add a new employee */}
        <div className="p-4 bg-gray-300">
          <Link to="/add" className="text-blue-500 hover:underline">
            Add New Employee
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListEmployees;
