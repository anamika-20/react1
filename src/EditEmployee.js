import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { editEmployee, selectEmployeeById } from "./employeeState";

const EditEmployee = () => {
  // Extracting id from URL params
  const { id } = useParams();

  // Selecting employee data by id from Redux store
  const employee = useSelector((state) => selectEmployeeById(state, id));

  // Local state for form fields and data loading
  const [fullName, setFullName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); // Track whether employee data is loaded
  const [showToast, setShowToast] = useState(false); // Track whether toast message should be shown

  const dispatch = useDispatch(); // Redux dispatch function

  // Effect to update local state when employee data changes
  useEffect(() => {
    if (employee) {
      // Set form field values when employee data is available
      setFullName(employee.fullName);
      setBirthdate(employee.birthdate);
      setDepartment(employee.department);
      setExperience(employee.experience);
      setIsLoaded(true); // Set isLoaded to true once employee data is available
    }
  }, [employee]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch editEmployee action with updated employee data
    dispatch(
      editEmployee({
        id,
        changes: { fullName, birthdate, department, experience },
      })
    );

    // Show toast message only if form was successfully submitted
    setShowToast(true);

    // Hide toast message after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Employee</h2>
        {isLoaded && ( // Render form only when employee data is loaded
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Birthdate"
              required
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
              required
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience (in years)"
              required
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Employee
            </button>
          </form>
        )}
        {showToast && ( // Render toast message if showToast is true
          <div className="mt-4 p-2 bg-green-500 text-white rounded">
            Employee has been successfully updated!
          </div>
        )}
        <Link to="/list" className="block mt-4 text-blue-500 hover:underline">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default EditEmployee;
