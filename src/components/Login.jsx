import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div>
      <div className={`m-4 flex flex-col`}>
        {children}
      </div>
    </div>
  );
};

export default FlexContainer;
