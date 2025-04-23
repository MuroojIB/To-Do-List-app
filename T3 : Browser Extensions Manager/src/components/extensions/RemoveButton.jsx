import React from "react";

const RemoveButton = ({ darkMode }) => {
  return (
    <button
      className={`${
        darkMode
          ? "text-Neutral-100 border-Neutral-600 drop-shadow"
          : "border-Neutral-300"
      } border text-lg rounded-full py-2 px-5 font-medium disabled-button`}
    >
      Remove
    </button>
  );
};

export default RemoveButton;