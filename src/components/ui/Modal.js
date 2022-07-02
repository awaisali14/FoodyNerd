import React from "react";
import reactDom from "react-dom";

const Backdrop = (props) => {
  return <div className="modal-backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-overlay">
      <div>{props.children}</div>
    </div>
  );
};
const modalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(<Backdrop />, modalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
