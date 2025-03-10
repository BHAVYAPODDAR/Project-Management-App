import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-stone-700 text-stone-200 hover:bg-stone-600 hover:text-stone-100 rounded-md"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
