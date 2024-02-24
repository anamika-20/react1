// Imported necessary functions and modules from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Imported the reducer from the employeeSlice file
import employeeReducer from "./employeeSlice";

// Configured the Redux store with the employee reducer
const store = configureStore({
  reducer: {
    employee: employeeReducer, // Defined the 'employee' slice of state
  },
});

// Exported the configured store
export default store;
