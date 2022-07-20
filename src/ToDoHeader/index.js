import React from 'react';
import './ToDoHeader.css';

function ToDoHeader({children}) {
    return (
        <header className="App-header">
            {children}
        </header>
    );
}

export {ToDoHeader};