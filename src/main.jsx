import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StudentProvider } from "./context/StudentContext";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <StudentProvider>
        <App />
      </StudentProvider>
    </ErrorBoundary>
  </React.StrictMode>
);