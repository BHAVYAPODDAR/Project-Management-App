import { useState } from "react";
import { HashRouter as Router } from "react-router-dom";

import NewProject from "./components/NewProject";
import Content from "./components/Content";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectsSelected from "./components/NoProjectsSelected";
import SelectedProject from "./components/SelectedProject";

const INITIAL_PROJECT_STATE = {
  selectedProjectId: undefined,
  projects: [
    {
      id: 1,
      title: "test",
      description: "test desc",
      dueDate: "09-08-2024",
    },
  ],
  tasks: [],
};
// selectedProjectId: undefined       no project selected and not adding project
// selectedProjectId: null            no project selected and adding project

function App() {
  const [projectState, setProjectState] = useState(INITIAL_PROJECT_STATE);

  const StartAddNewProject = () => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddNewTask = (text) => {
    setProjectState((prevProjectState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevProjectState.selectedProjectId,
        text: text,
      };
      return {
        ...prevProjectState,
        tasks: [newTask, ...prevProjectState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: projectState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const CancelAddNewProject = () => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: id,
      };
    });
  };

  const AddNewProject = (projectData) => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: projectData.id,
        projects: [projectData, ...prevProjectState.projects],
      };
    });
  };

  const DeleteProject = () => {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: projectState.projects.filter(
          (project) => project.id !== prevProjectState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const projectTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={DeleteProject}
      onAddNewTask={handleAddNewTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectTasks}
    />
  );

  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectsSelected onStartAddNewProject={StartAddNewProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancelAddNewProject={CancelAddNewProject}
        onAddNewProject={AddNewProject}
      />
    );
  }

  return (
    <Router>
      <main className="h-screen flex flex-1 gap-8">
        <ProjectsSidebar
          onAddNewProject={StartAddNewProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />
        <Content>{content}</Content>
      </main>
    </Router>
  );
}

export default App;
