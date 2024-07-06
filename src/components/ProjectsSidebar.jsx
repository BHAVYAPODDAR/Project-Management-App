import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  onAddNewProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <>
      <aside className="w-1/3 md:w-72 bg-stone-900  text-stone-50 py-16 px-8 ">
        <div className="mb-8">
          <Button onClick={onAddNewProject}>+ Add Project</Button>
        </div>
        <h1 className="font-bold md:text-xl my-4 uppercase text-stone-200">
          Your Projects
        </h1>
        <ul className="my-4">
          {projects.map((project) => {
            let btnClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

            if (project.id === selectedProjectId) {
              btnClasses += " bg-stone-800 text-stone-200";
            } else {
              btnClasses += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  className={btnClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default ProjectsSidebar;
