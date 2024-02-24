// Imported necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Imported Provider from react-redux to provide Redux store to the application
import { Provider } from "react-redux";
// Imported the Redux store from the store.js file
import store from "./store";

// Rendered the application by wrapping it with the Provider component
// The Provider component takes the Redux store as a prop to provide the store to the entire application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
