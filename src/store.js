// Imported necessary functions and modules from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Imported the reducer from the employeeState file
import employeeReducer from "./employeeState";

// Configured the Redux store with the employee reducer
const store = configureStore({
  reducer: {
    employee: employeeReducer, // Defined the 'employee' slice of state
  },
});

// Exported the configured store
export default store;
