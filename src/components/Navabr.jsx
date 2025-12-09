import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useAuth } from "../context/authContext";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      return true;
    } else {
      document.documentElement.classList.remove("dark");
      return false;
    }
  });
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Toggle dark/light mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-white transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 dark:bg-white dark:p-2 dark:rounded-2xl">
          <img src={assets.logo} alt="logo" className="w-30" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4 text-gray-700 dark:text-gray-200">
          <Link to="/">HOME</Link>
          <Link to="/alldoctors">DOCTORS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>

          {user && (
            <button
              onClick={() => navigate("/admin-panel")}
              className="px-3 py-1 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Admin Panel
            </button>
          )}
          
          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile menu icon */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="text-gray-700 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl px-4 pb-4 flex flex-col gap-4 text-gray-700 dark:text-gray-200 transition-colors">
          <Link onClick={() => setOpen(false)} to="/">HOME</Link>
          <Link onClick={() => setOpen(false)} to="/alldoctors">DOCTORS</Link>
          <Link onClick={() => setOpen(false)} to="/about">ABOUT</Link>
          <Link onClick={() => setOpen(false)} to="/contact">CONTACT</Link>

          {user && (
            <button
              onClick={() => {
                setOpen(false);
                navigate("/admin-panel");
              }}
              className="px-4 py-2 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              Admin Panel
            </button>
          )}

          {user ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Create Account
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
