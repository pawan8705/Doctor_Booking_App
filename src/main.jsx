import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";   // ✅ Add this
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/authContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

<<<<<<< HEAD
// Add skip to content link for accessibility
const skipLink = document.createElement("a");
skipLink.href = "#main-content";
skipLink.textContent = "Skip to main content";
skipLink.className = "skip-to-content";
document.body.prepend(skipLink);

=======
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
<<<<<<< HEAD
        <BrowserRouter>
=======
        <BrowserRouter>  
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
<<<<<<< HEAD
);
=======
);
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
