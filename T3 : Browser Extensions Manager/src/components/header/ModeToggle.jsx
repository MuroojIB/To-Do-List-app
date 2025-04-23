import React from "react";

// ModeToggle: A button that toggles between light mode and dark mode
const ModeToggle = ({ darkMode, setDarkMode }) => {
  // Choose the appropriate icon based on the current mode
  const iconPath = darkMode ? "./images/icon-sun.svg" : "./images/icon-moon.svg";

  // Function to toggle the mode and update the <body> class for styling changes
  const changeMode = () => {
    setDarkMode(prev => !prev);
    const bodyClasses = document.body.classList;

    // If the body already contains "dark", add "bright" before toggling
    if (bodyClasses.contains("dark")) bodyClasses.add("bright");

    // Toggle the "dark" class to switch styling modes
    bodyClasses.toggle("dark");
  };

  return (
    <button
      className={`${darkMode ? "bg-Neutral-700" : "bg-Neutral-100"} p-3 rounded-xl cursor-pointer`}
      onClick={changeMode}
      aria-label="Toggles the Dark Mode"
    >

      {/* Display the mode icon */}
      <img src={iconPath} alt="Toggle Icon" />
    </button>
  );
};

export default ModeToggle;
