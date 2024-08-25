import React from "react";

import logo from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectsSelected = ({ onStartAddNewProject }) => {
  return (
    <div className="mt-24 w-full text-center">
      <img
        src={logo}
        alt="notepad"
        className="w-16 h-16 object-contain mx-auto my-4 "
      />
      <h2 className="my-4 font-bold text-stone-500 text-xl">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddNewProject}>Create a new Project</Button>
      </p>
    </div>
  );
};

export default NoProjectsSelected;
