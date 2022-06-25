import React from 'react';
import "./ToDoSearch.css";

function ToDoSearch(){
    const onSearchValueChanged = (event) => {
        console.log(event.target.value);
    };
    return (
        <input
            className="ToDoSearch"
            placeholder="React"
            onChange={onSearchValueChanged}
        />
    );
}

export {ToDoSearch};