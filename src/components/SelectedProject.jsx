import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  onDeleteProject,
  onAddNewTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-full sm:w-[35rem] mt-16 px-4">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 ">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-red-600"
            onClick={onDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-700 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        onAddNewTask={onAddNewTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    </div>
  );
};

export default SelectedProject;
