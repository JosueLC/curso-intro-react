import React from 'react';
import "./CreateToDoButton.css";

function CreateToDoButton({modalState,setModalState}){
    const onClickButton = () => {
        setModalState(!modalState);
    };
    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateToDoButton};