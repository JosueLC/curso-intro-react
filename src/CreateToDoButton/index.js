import React from 'react';
import { ToDoContext } from '../ToDoContext';
import "./CreateToDoButton.css";

function CreateToDoButton(){
    const {modalState,setModalState} = React.useContext(ToDoContext);
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