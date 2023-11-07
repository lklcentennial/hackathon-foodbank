import React from "react";

const FlexContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`m-4 flex flex-col`}>
      {children}
    </div>
  );
};

export default FlexContainer;
