import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div className={`m-4 flex flex-col justify-center items-center h-screen`}>
      {children}
    </div>
  );
};

export default FlexContainer;
