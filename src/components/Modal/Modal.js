import React from "react";
import "./Modal.css";

export default function Modal({ children, ...props }) {
  return (
    <>
      <div
        className={`modal fade 
                        ${props.isModalOpen ? "show" : ""}
                        ${props.modalClass}
                        `}
        id={props.modalID}
      >
        <div
          className={`modal-dialog
                            ${props.modalWidth}
                            ${
                              props.isModalScrollable
                                ? "modal-dialog-scrollable"
                                : ""
                            }
                            ${
                              props.isModalCentered
                                ? "modal-dialog-centered"
                                : ""
                            }
                            `}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
      <div
        className={`${props.isModalOpen ? "modal-backdrop fade show" : ""}`}
      ></div>
    </>
  );
}
