import "../src/styles/app.css";
import datasetInfo from "./data/dataset_info.json";

function Dataset({ dataSetsRef }) {

  return (
    <section ref={dataSetsRef} className="flex bg-gray-100 text-black px-20 py-16 min-h-screen">
      {/* LEFT PANEL — sticky */}
      <div className="w-1/3 pr-16 flex-shrink-0">
        <div className="sticky top-24 p-6 rounded-lg text-6xl text-accent-1 font-bebas-neue">
          <h1 className="overview-text">Dataset Collection</h1>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Our research utilizes data from three publicly available datasets sourced from Kaggle, each containing collections of SMS messages relevant to spam and fraud detection within the Philippines. These datasets were combined and preprocessed to form a unified corpus for machine learning analysis.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL — balanced margin & natural scroll */}
      <div className="flex-1 ml-10 mr-20">
        {/* Repository Viewer */}
        <div className="flex flex-col justify-center mt-4 bg-white shadow-lg rounded-2xl">
          <div className="bg-accent-1 rounded-t-2xl">
            <article className="text-4xl font-bebas-neue text-white mb-5 pt-5 px-10">
              Dataset Repository
            </article>
          </div>
          <iframe
            className="w-full h-[60vh]  rounded-b-2xl"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSfJeUmtAEvPeFP6Rd4PNuE9bdoWYu6CQFicWWBlCqyzgJOLY7HdgIAHT8Mb4TnrmsFgCK31LYqv91/pubhtml?widget=true&headers=false"
            title="Dataset Repository"
          ></iframe>
        </div>

        <div className="text-left mt-12">
       
        </div>

        {/* DATASET LIST */}
        <div className="flex flex-col gap-10 bg-white shadow-lg rounded-2xl pb-5">
          <div className="bg-accent-1 rounded-t-2xl">
              <article className="text-4xl font-bebas-neue text-white p-5 px-10">Main datasets
          </article>
          </div>
    
          <div className="p-5">
            <ul className=" pl-6 space-y-10">
              {
                datasetInfo.map((datasetInfo, index) => (
                  <li>
                    <h3 className="font-bold text-accent-1 text-xl">
                      {datasetInfo.title}
                    </h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {datasetInfo.description}
                    </p>
                    <ul className="pl-5">
                      <li className="list-disc">{`Author: ${datasetInfo.author}`}</li>
                      <li className="list-disc">{`Timespan: ${datasetInfo.timespan}`}</li>
                      <li className="list-disc">{`Size: ${datasetInfo.size}`}</li>
                    </ul>
                  </li>
                )) 
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dataset;
