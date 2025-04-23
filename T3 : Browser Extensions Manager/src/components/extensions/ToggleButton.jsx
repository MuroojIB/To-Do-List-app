import { useState } from "react";

// Toggle Button Component
const ToggleButton = ({ isActive, darkMode }) => {

  // Local state to control the visual movement and color change only
  const [isActiveState, setIsActiveState] = useState(isActive);

  // Function to update the visual state on click without modifying external data
  const handleClick = () => {
    setIsActiveState((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick} 
      // On click, update the visual state
      className={`${
        isActiveState
          ? darkMode
            ? "bg-Red-400" // Background in dark mode when active
            : "bg-Red-700" // Background in light mode when active
          : "bg-Neutral-300" // Background in light mode when inactive
      } ${!isActiveState && darkMode ? "bg-Neutral-600" : ""} cursor-pointer relative w-13 h-7 rounded-full p-1 transition-colors ease duration-500`}
    >

      {/* Internal indicator that moves on toggle */}
      <div
        className={`${
          isActiveState ? "translate-x-[52%]" : "" // Move cursor when activated
        } absolute left-3.5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[23px] w-[23px] rounded-full shadow bg-white transition-transform duration-500 ease`}
      ></div>
    </button>
  );
};

export default ToggleButton;