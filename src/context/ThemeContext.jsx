import React, { createContext, useContext, useState, useCallback } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // ✅ Initialize once — apply class immediately (no flash)
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    return isDark;
  });

  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
