import ToggleButton from "./ToggleButton";
import RemoveButton from "./RemoveButton";

// Convert card data into display elements
const Cards = ({ darkMode, data }) => {
  const cards = data.map(({ logo, name, description, isActive }) => (
    <li
      key={name}
      className={`${
        darkMode
          ? "bg-Neutral-700 border-Neutral-600"
          : "bg-white border-Neutral-200"
      } h-full p-5 rounded-3xl border shadow-lg`}
    >
    {/*This container uses flexbox in a column layout to group the content, with the top section containing the image and text.*/}
      <div className="flex flex-col h-full">
        <div className="flex flex-1 gap-4 items-start">
          <img src={logo} alt={`${name} Icon`} />
          <div className="flex flex-col gap-1">
            <h2 className={`${darkMode ? "text-Neutral-100" : ""} font-bold text-xl`}>
              {name}
            </h2>
            <p className={`${darkMode ? "text-Neutral-300 font-light" : "text-Neutral-600"} text-lg`}>
              {description}
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-8">
          {/* Remove Button */}
          <RemoveButton darkMode={darkMode} />
          {/* Toggle Button */}
          <ToggleButton isActive={isActive} darkMode={darkMode} />
        </div>

      </div>
    </li>
  ));

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-center">
      {cards}
    </ul>
  );
};

export default Cards;