import React from 'react';
import "./CreateToDoButton.css";



function CreateToDoButton(){
    const onClickButton = () => {
        alert("Create todo button clicked");
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