"use client";
import React, { useState, useEffect } from "react";

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const options = ["2259 Kingston Rd.", "102 Milner Ave.", "32 Greenwood"]

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (value) => {
    setInputValue(value);
    setSuggestions([]);
  };

  return (
    <div className="">
      <input
        className="mx-2 p-4 text-2xl border-2 border-gray-700 focus:border-gray-900"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here"
      />
      <ul className="bg-gray-300 mx-4">
        {suggestions.map((suggestion, index) => (
          <li
            className="m-2 p-2 cursor-pointer"
            key={index}
            onClick={() => handleSelect(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
