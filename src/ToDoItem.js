import React from 'react';
import "./ToDoItem.css";

function ToDoItem(props){
    const onComplete = () => {
        alert('Completaste la tarea: \n' + props.text);
    };
    const onDelete = () => {
        alert('Borraste la tarea: \n' + props.text);
    };

    return (
        <li className="ToDoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            />
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={onDelete}
            />
        </li>
    );
}

export {ToDoItem};