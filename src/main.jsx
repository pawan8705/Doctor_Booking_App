import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/authContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Add skip to content link for accessibility
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.textContent = "Skip to main content";
skipLink.className = "skip-to-content";
document.body.prepend(skipLink);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);