import React from "react";
import Navbar from "./Navbar";
import Inventory from "./Inventory";

const FlexContainer = ({ children }) => {
  return (
    <div className={`m-4 flex flex-col`}>
      <Navbar/>
      <Inventory/>
      {children}
    </div>
  );
};

export default FlexContainer;
