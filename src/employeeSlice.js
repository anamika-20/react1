import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";

// Created a slice for managing employees
const employeeSlice = createSlice({
  name: "employees", // Named the slice for managing employees
  initialState: {
    entities: [], // Initialized the state with an empty array for storing employees
  },
  reducers: {
    // Reduced function for adding a new employee
    addEmployee: {
      reducer(state, action) {
        // Added the new employee to the entities array in the state
        state.entities.push(action.payload);
      },
      // Prepared function to handle action payload creation
      prepare({ fullName, birthdate, department, experience }) {
        // Used nanoid to generate a unique id for the new employee
        return {
          payload: {
            id: nanoid(),
            fullName,
            birthdate,
            department,
            experience,
          },
        };
      },
    },
    // Reduced function for editing an existing employee
    editEmployee(state, action) {
      const { id, changes } = action.payload;
      // Found the employee to be edited by id
      const existingEmployee = state.entities.find(
        (employee) => employee.id === id
      );
      // If the employee existed, applied the changes
      if (existingEmployee) {
        Object.assign(existingEmployee, changes);
      }
    },
    // Reduced function for deleting an employee
    deleteEmployee(state, action) {
      // Filtered out the deleted employee from the entities array
      const newState = {
        ...state,
        entities: state.entities.filter(
          (employee) => employee.id !== action.payload
        ),
      };
      return newState; // Returned the new state after deletion
    },
  },
});

// Extracted action creators and reducer from the slice
export const { addEmployee, editEmployee, deleteEmployee } =
  employeeSlice.actions;

// Exported the reducer function
export default employeeSlice.reducer;

// Selected employee data from the state using selectors
export const selectAllEmployees = createSelector(
  (state) => state.employee.entities, // Selected the entities array from the state
  (entities) => entities // Returned the entities array
);

export const selectEmployeeById = createSelector(
  (state) => state.employee?.entities, // Used optional chaining (?.) to handle undefined state
  (_, employeeId) => employeeId, // Selected the employeeId
  (entities, employeeId) => entities.find((emp) => emp.id === employeeId) // Returned the employee with matching id
);

// Exported the reducer function separately
export const { reducer } = employeeSlice;
