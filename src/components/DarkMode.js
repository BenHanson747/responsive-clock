import React, { useState, useEffect } from "react";
import { BiMoon } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

function DarkMode() {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("darkTheme") === "true"
  );

  const toggleDarkTheme = () => {
    const nextDarkTheme = !darkTheme;
    setDarkTheme(nextDarkTheme);
    localStorage.setItem("darkTheme", nextDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);

  return (
    <button
      className={`clock__theme ${darkTheme ? "dark" : "light"}`}
      onClick={toggleDarkTheme}
      aria-label={darkTheme ? "Light Mode" : "Dark Mode"}
    >
      {darkTheme ? <FiSun /> : <BiMoon />}
    </button>
  );
}

export default DarkMode;
