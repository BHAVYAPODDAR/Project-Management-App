import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ onAddNewTask }) => {
  const [newTask, setNewTask] = useState("");
  const modal = useRef();

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSaveTask = () => {
    if (newTask.trim() === "") {
      modal.current.showModal();
      return;
    }
    onAddNewTask(newTask);
    setNewTask("");
  };

  return (
    <>
      <Modal buttonCaption="Okay" ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Please enter a valid task</p>
      </Modal>
      <div className="flex items-center justify-between gap-4 ">
        <input
          type="text"
          className="w-64 px-2 py-2 rounded-sm bg-stone-200 "
          onChange={handleTaskChange}
          value={newTask}
        />
        <button
          className="text-stone-700 hover:text-green-600"
          onClick={handleSaveTask}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
