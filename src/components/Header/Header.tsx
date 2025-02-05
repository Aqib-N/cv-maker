"use client";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("ENG");

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Home</h1>

      {/* Language Selector */}
      <div className="relative">
        <button className="border px-4 py-2 rounded-md">{language} ▼</button>
        {/* Dropdown */}
        <ul className="absolute bg-white shadow-md mt-1 w-full rounded-md">
          <li>
            <button
              onClick={() => setLanguage("ENG")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              ENG
            </button>
          </li>
          <li>
            <button
              onClick={() => setLanguage("FR")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              FR
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
