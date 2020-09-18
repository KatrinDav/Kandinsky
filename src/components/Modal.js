import React from 'react';

const Modal = ({ item, isOpen, closeModal }) => {
    return (
        <>
            {isOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={item.src} alt="art" />
                    <div className="caption">{item.title}</div>
                </div>
            )}
        </>
    );
}

export default Modal;