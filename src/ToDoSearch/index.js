import React from 'react';
import "./ToDoSearch.css";

function ToDoSearch({searchValue, setSearchValue}) {
    const onSearchValueChanged = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <input
            className="ToDoSearch"
            placeholder="React"
            value={searchValue}
            onChange={onSearchValueChanged}
        />
    );
}

export {ToDoSearch};