// imports
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addEmployee } from "./employeeState";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checked if any of the fields are empty
    if (!fullName || !birthdate || !department || !experience) {
      alert("Please fill out all required fields.");
      return; // Exit early if any field is empty
    }

    // Dispatched addEmployee action with form data
    dispatch(addEmployee({ fullName, birthdate, department, experience }));

    // Cleared form fields
    setFullName("");
    setBirthdate("");
    setDepartment("");
    setExperience("");

    // Showed toast message only if form was successfully submitted
    setShowToast(true);

    // Hidden toast message after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    // Main container with background gradient
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md mx-auto p-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name input */}
          <label htmlFor="fullName" className="block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter full name"
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          {/* Birthdate input */}
          <label htmlFor="birthdate" className="block mb-2">
            Birthdate
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Enter birthdate"
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          {/* Department input */}
          <label htmlFor="department" className="block mb-2">
            Department
          </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter department"
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          {/* Experience input */}
          <label htmlFor="experience" className="block mb-2">
            Experience (in years)
          </label>
          <input
            type="number"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter experience (in years)"
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          />
          {/* Submit button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Employee
          </button>
        </form>
        {/* Toast message for successful submission */}
        {showToast && (
          <div className="mt-4 p-2 bg-green-500 text-white rounded">
            Employee has been successfully added!
          </div>
        )}
        {/* Link to navigate back to the employee list */}
        <Link to="/list" className="block mt-4 text-blue-500 hover:underline">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default AddEmployee;
