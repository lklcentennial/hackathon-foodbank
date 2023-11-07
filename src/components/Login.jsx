import React from "react";
import Navbar from "./Navbar";

const FlexContainer = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div className={`m-4 flex flex-col`}>
        {children}
      </div>
    </div>
  );
};

export default FlexContainer;
