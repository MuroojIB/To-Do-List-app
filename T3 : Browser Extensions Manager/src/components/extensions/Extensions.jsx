import Cards from "./Cards";
import { useState, useEffect } from "react";

// Extensions: The main component to fetch data and render it using the Cards component along with state buttons
const Extensions = ({ darkMode }) => {
  const [data, setData] = useState([]);

  // Using useEffect to fetch data from data.json when the component mounts
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();
        setData(jsonData);          // Update offer data
      } catch (err) {
        console.log(`Network error:\n ${err}`);
      }
    };

    fetchCards();
  }, []);

  // Prepare button styling for state buttons (All, Active, Inactive)
  const btnStyle = `${
    darkMode
      ? "bg-Neutral-700 text-Neutral-0 border-Neutral-600 shadow-black"
      : "bg-white shadow-Neutral-200 border-Neutral-200"
  } state-button disabled-button`;

  return (
    <article className="text-Neutral-900 flex flex-col gap-5 mt-8 items-center">

      {/* Header section with title and state buttons */}
      <section className="w-full flex max-md:flex-col gap-5 items-center text-lg justify-between container mx-auto">
        <h1 className={`${darkMode ? "text-Neutral-0" : ""} font-bold text-3xl`}>
          Extensions List
        </h1>
        <div className="state-btns flex gap-4 items-center justify-between">
          <button className={`${btnStyle} selected-button`}>All</button>
          <button className={btnStyle}>Active</button>
          <button className={btnStyle}>Inactive</button>
        </div>
      </section>

      {/*Cards container: vertical, full-width & centered */}
      <div className="flex flex-col w-full items-center gap-5 lg:container mx-auto">
        <Cards darkMode={darkMode} data={data} />
      </div>
    </article>
  );
};

export default Extensions;