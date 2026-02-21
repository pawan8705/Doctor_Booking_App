/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, User, LogOut, Calendar, ChevronDown } from "lucide-react";
import { useAuth } from "../context/authContext";
import { useTheme } from "../context/ThemeContext";
import { assets } from "../assets/assets";

const NAV_ITEMS = [
  { name: "Home",    path: "/" },
  { name: "Doctors", path: "/alldoctors" },
  { name: "About",   path: "/about" },
  { name: "Contact", path: "/contact" },
];

const ADMIN_EMAIL = "admin@healthcare.com";

const Navbar = () => {
  const [open, setOpen]               = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const profileRef                    = useRef(null);
  const navigate                      = useNavigate();
  const location                      = useLocation();
  const { user, logout }              = useAuth();
  const { darkMode, toggleTheme }     = useTheme(); // ✅ shared context

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setProfileOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => { setOpen(false); setProfileOpen(false); }, [location.pathname]);

  const handleLogout = useCallback(async () => {
    await logout();
    setProfileOpen(false);
    navigate("/");
  }, [logout, navigate]);

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md dark:shadow-gray-800/50"
          : "bg-white dark:bg-gray-900"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity" aria-label="HealthCare home">
          <img
            src={assets.logo}
            alt="HealthCare Logo"
            className="w-24 sm:w-28 md:w-32 dark:brightness-0 dark:invert"
            width="128" height="40"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                isActive(item.path)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-200 origin-left ${
                isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          ))}

          {/* ✅ Theme toggle — now uses shared context */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode
              ? <Sun size={18} className="text-yellow-500" />
              : <Moon size={18} className="text-gray-600" />}
          </button>

          {/* User menu */}
          {user ? (
            <div className="relative ml-2" ref={profileRef}>
              <button
                onClick={() => setProfileOpen((p) => !p)}
                aria-expanded={profileOpen}
                aria-haspopup="true"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all text-sm font-medium"
              >
                <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold select-none">
                  {user.email?.[0]?.toUpperCase()}
                </div>
                <span className="max-w-[100px] truncate hidden xl:block">{user.email?.split("@")[0]}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`} />
              </button>

              {/* ✅ will-change: transform — GPU composite layer */}
              {profileOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50"
                  style={{ willChange: "transform, opacity" }}
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-400">Signed in as</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{user.email}</p>
                  </div>
                  <Link to="/my-appointments" onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    role="menuitem">
                    <Calendar size={15} /> My Appointments
                  </Link>
                  {user.email === ADMIN_EMAIL && (
                    <Link to="/admin-panel" onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      role="menuitem">
                      <User size={15} /> Admin Panel
                    </Link>
                  )}
                  <hr className="my-1 border-gray-100 dark:border-gray-700" />
                  <button onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full transition-colors"
                    role="menuitem">
                    <LogOut size={15} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="ml-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            aria-label={darkMode ? "Light mode" : "Dark mode"}>
            {darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-gray-600" />}
          </button>
          <button
            onClick={() => setOpen((p) => !p)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="bg-white dark:bg-gray-900 px-4 sm:px-6 pb-5 pt-2 flex flex-col gap-1 border-t border-gray-100 dark:border-gray-700">
          {NAV_ITEMS.map((item) => (
            <Link key={item.path} to={item.path}
              className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                isActive(item.path)
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <hr className="my-2 border-gray-100 dark:border-gray-700" />
          {user ? (
            <>
              <div className="px-4 py-2">
                <p className="text-xs text-gray-400">Signed in as</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">{user.email}</p>
              </div>
              <Link to="/my-appointments"
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl">
                <Calendar size={15} className="text-blue-500" /> My Appointments
              </Link>
              {user.email === ADMIN_EMAIL && (
                <Link to="/admin-panel"
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl">
                  <User size={15} className="text-blue-500" /> Admin Panel
                </Link>
              )}
              <button onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl text-left font-medium">
                <LogOut size={15} /> Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/login")}
              className="mx-4 mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md transition-all">
              Sign In / Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);

