import ModeToggle from "./ModeToggle";

// Header: This component represents the page header and displays the logo along with the mode toggle button
const Header = ({ darkMode, setDarkMode }) => {

  // Choose the appropriate logo based on the darkMode value
  const imgPath = darkMode ? "./images/logo-dark.svg" : "./images/logo.svg";

  return (
    <header
      className={`flex px-3 py-2 rounded-xl shadow-lg shadow-Neutral-200 gap-5 justify-between items-center ${
        darkMode ? "bg-Neutral-800 shadow-black" : "bg-white"
      }`}
    >
      {/* Logo Image */}
      <img className="max-md:w-38" src={imgPath} alt="Logo Image" />
      {/* Include the ModeToggle component */}
      <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
};

export default Header;