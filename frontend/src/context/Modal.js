import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

//Create a React context called a ModalContext
const ModalContext = React.createContext();

//Create a functional component called ModalProvider
export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
      setValue(modalRef.current);
    }, [])

    return (
      <>
        <ModalContext.Provider value={value}>
          {children}
        </ModalContext.Provider>
        <div ref={modalRef} />
      </>
    );
  }





//Create a React ref called modalRef

//Create a functional component called Modal
export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
      <div id="modal">
        <div id="modal-background" onClick={onClose} />
        <div id="modal-content">
          {children}
        </div>
      </div>,
      modalNode
    );
  }
