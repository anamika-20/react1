//imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import ListEmployees from "./ListEmployees";
import Dashboard from "./Dashboard";

function App() {
  return (
    // Router component to enable routing in the application
    <Router>
      {/* Routes component to define different routes and their corresponding components */}
      <Routes>
        {/* Route for the dashboard page , add page, edit page and list page */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/list" element={<ListEmployees />} />
      </Routes>
    </Router>
  );
}

export default App;
