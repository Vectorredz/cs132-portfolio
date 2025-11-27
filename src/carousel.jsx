import React, { useState } from "react";

export default function Carousel({ eda }) {
  const figures = [eda.fig1, eda.fig2, eda.fig3].filter(Boolean);
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((index + 1) % figures.length);
  const prevSlide = () => setIndex((index - 1 + figures.length) % figures.length);
  const current = figures[index];

  return (
    <div className="flex flex-col items-center text-center p-6 max-w-6xl mx-auto">
      {/* --- TITLE SECTION --- */}
      {eda.title && (
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-2 text-accent-1 italic">{eda.title}</h2>
        </div>
      )}

      {/* --- IMAGE CAROUSEL --- */}
      {figures.length > 0 && (
        <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {figures.map((fig, i) => (
              <div key={i} className="w-full flex-shrink-0 flex flex-col items-center bg-white">
                <img
                  src={fig.src}
                  alt={fig.caption}
                  className="rounded-xl shadow-lg w-full h-[500px] object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      )}

      {/* --- FIGURE CAPTION + DESCRIPTION --- */}
      {current && (
        <div className="mt-4 max-w-3xl">
          <p className="font-semibold">{current.caption}</p>
          <p className="text-gray-700 text-sm mt-2">{current.description}</p>
        </div>
      )}

      {/* --- HYPOTHESES SECTION --- */}
      {eda.hypotheses && (
        <div className="bg-white p-6 mt-10 rounded-2xl shadow-md text-left max-w-4xl w-full border border-gray-200">
          <h3 className="text-2xl font-bold mb-3 text-center">Hypotheses</h3>
          <p className="mb-2">
            <strong>H₀ (Null):</strong> {eda.hypotheses.H0}
          </p>
          <p>
            <strong>H₁ (Alternative):</strong> {eda.hypotheses.H1}
          </p>
        </div>
      )}

      {/* --- STATISTICAL TESTS SECTION --- */}
      {(eda.normalityCheck || eda.statisticalTest || eda.chiSquareTest) && (
        <div className="bg-white p-6 mt-10 rounded-2xl shadow-lg text-left max-w-4xl w-full border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-center">Hypothesis Testing</h3>

          {/* Normality Check */}
          {eda.normalityCheck && (
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Normality Check</h4>
              <table className="w-full text-sm border border-gray-300 mb-3">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">p-value</th>
                    <th className="border p-2">Normality</th>
                  </tr>
                </thead>
                <tbody>
                  {eda.normalityCheck.category.map((cat, i) => (
                    <tr key={i}>
                      <td className="border p-2">{cat}</td>
                      <td className="border p-2">{eda.normalityCheck["p-value"][i]}</td>
                      <td className="border p-2">{eda.normalityCheck.normality[i]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-gray-700 italic">{eda.normalityCheck.conclusion}</p>
            </div>
          )}

          {/* Mann–Whitney U Test */}
          {eda.statisticalTest && (
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-lg">Mann–Whitney U Test Results</h4>
              <table className="w-full text-sm border border-gray-300 mb-3">
                <tbody>
                  {Object.entries(eda.statisticalTest).map(([key, value], i) => (
                    <tr key={i}>
                      <td className="border p-2 font-medium">{key}</td>
                      <td className="border p-2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-gray-700 italic">{eda.statisticalTest.conclusion}</p>
            </div>
          )}

          {/* Chi-Square Test */}
          {eda.chiSquareTest && (
            <div>
              <h4 className="font-semibold mb-2 text-lg">Chi-square Test Results</h4>
              <table className="w-full text-sm border border-gray-300 mb-3">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-2">Word</th>
                    <th className="border p-2">Chi-square Score</th>
                    <th className="border p-2">p-value</th>
                  </tr>
                </thead>
                <tbody>
                  {eda.chiSquareTest.words.map((word, i) => (
                    <tr key={i}>
                      <td className="border p-2">{word}</td>
                      <td className="border p-2">{eda.chiSquareTest["chi2"][i]}</td>
                      <td className="border p-2">{eda.chiSquareTest["p-value"][i]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-gray-700 italic">{eda.chiSquareTest.conclusion}</p>
            </div>
          )}
        </div>
      )}

      {/* --- CONCLUSION --- */}
      {eda.conclusion && (
        <div className="bg-gray-100 p-6 mt-10 rounded-2xl shadow-md text-left max-w-4xl w-full">
          <h3 className="text-xl font-bold mb-2">Conclusion</h3>
          <p className="text-gray-800">{eda.conclusion}</p>
        </div>
      )}
    </div>
  );
}
