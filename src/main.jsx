import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import UserProvider from "./pages/Website/Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </StrictMode>
);
