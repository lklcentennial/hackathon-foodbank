import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div className={`m-4 flex flex-col`}>
      {children}
    </div>
  );
};

export default FlexContainer;
