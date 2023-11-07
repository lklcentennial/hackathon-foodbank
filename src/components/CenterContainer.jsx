import React from "react";

const CenterContainer = ({ children }) => {
  return (
    <div className={`m-4 flex flex-col justify-center items-center h-screen`}>
      {children}
    </div>
  );
};

export default CenterContainer;
