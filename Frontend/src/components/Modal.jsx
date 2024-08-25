import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";

const Modal = forwardRef(({ buttonCaption, children }, ref) => {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,

    document.getElementById("modal-root")
  );
});

export default Modal;
