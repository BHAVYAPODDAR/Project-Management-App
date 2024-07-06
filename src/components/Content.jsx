import React from "react";

const Content = ({ children }) => {
  return (
    <div className="w-screen">
      <header className="flex items-center text-4xl justify-center mt-4 gap-4 h-[5vh]">
        <h1 className="font-bold font-serif">Managely</h1>
      </header>
      {children}
    </div>
  );
};

export default Content;
