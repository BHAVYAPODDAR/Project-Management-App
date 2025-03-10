import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onCancelAddNewProject, onAddNewProject }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.showModal();
      return;
    }

    const projectData = {
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onAddNewProject(projectData);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid Input{" "}
        </h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-screen sm:w-[35rem] mt-16 px-4">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950 font-normal"
              onClick={onCancelAddNewProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} required />
          <Input label="Description" textArea ref={description} required />
          <Input type="date" label="Due Date" ref={dueDate} required />
        </div>
      </div>
    </>
  );
};

export default NewProject;
