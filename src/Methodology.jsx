import "../src/styles/App.css";
import { useState } from "react";
import edaInfo from "./data/eda_info.json";
import Carousel from "./carousel.jsx";

function Methodology() {
  const [toggle, setToggle] = useState(0);

  function updateToggle(idx) {
    setToggle(idx);
  }

  return (
    <section className="flex flex-col items-center justify-center bg-2 text-black px-10 py-12">
      <div className="w-full max-w-7xl">
        <h1 className="overview-text text-white mb-6 text-center">
          Exploratory Data Analysis
        </h1>

        {/* --- Methods --- */}
        <h2 className="text-white p-2 font-bebas-neue text-5xl ">Methods</h2>
        <div>
          <div className="mb-8 text-gray-200 max-w-3xl">
            <p>
              We combined three publicly available Philippine SMS datasets, cleaned duplicates,
              standardized labels, and extracted message-level features.
            </p>
            <span className="block mt-4 font-semibold">Data Cleaning and Preparation Steps:</span>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Removed duplicates and null entries.</li>
              <li>Converted date/time to uniform format.</li>
              <li>Merged datasets into one unified dataframe.</li>
              <li>Added a new column: text_length (number of characters per message).</li>
              <li>Standardized labels: spam/scam vs. non-spam.</li>
            </ul>
            <p className="mt-4">
              After preprocessing, the combined dataset contained 6,063 unique messages,
              with 2,447 spam/scam and 3,616 non-spam entries.
            </p>
          </div>
        </div>

        {/* --- Results Section --- */}

        <div className="bg-white shadow-xl w-full rounded-2xl">
          {/* --- Tab Buttons --- */}
          <div className="top-24 z-20 bg-white border-b rounded-t-xl overflow-hidden">
            <div className=" bg-orange-400 py-5 rounded-t-xl">
              <h2 className="text-white font-bebas-neue text-5xl px-5">Results</h2>
            </div>
            <ul className="flex gap-4 px-4 py-3 overflow-x-auto no-scrollbar">
              <li
                className={`tab2-text tab2-button whitespace-nowrap px-4 py-2 rounded-lg cursor-pointer ${
                  toggle === 0 ? "bg-accent-1 text-white" : ""
                }`}
                onClick={() => updateToggle(0)}
              >
                Nutshell
              </li>
              <li
                className={`tab2-text tab2-button whitespace-nowrap px-4 py-2 rounded-lg cursor-pointer ${
                  toggle === 1 ? "bg-accent-1 text-white" : ""
                }`}
                onClick={() => updateToggle(1)}
              >
                Research Question 1
              </li>
              <li
                className={`tab2-text tab2-button whitespace-nowrap px-4 py-2 rounded-lg cursor-pointer ${
                  toggle === 2 ? "bg-accent-1 text-white" : ""
                }`}
                onClick={() => updateToggle(2)}
              >
                Research Question 2
              </li>
            </ul>
          </div>

          {/* --- Tab Content --- */}
          <div className="p-6">
            {edaInfo.map((eda, index) => (
              <div
                key={eda.index}
                id={eda.index}
                className={`${toggle === eda.index ? "show-content" : "hidden"}`}
              >
               

                {/* Use Carousel here */}
                <Carousel eda={eda} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
