import React from 'react';
import { ToDoContext } from '../ToDoContext';
import "./ToDoSearch.css";

function ToDoSearch(){
    const {searchValue, setSearchValue} = React.useContext(ToDoContext);
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