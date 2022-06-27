import React from 'react';

import {ToDoContext} from '../ToDoContext';
import {ToDoCounter} from '../ToDoCounter';
import {ToDoSearch} from '../ToDoSearch';
import {ToDoList} from '../ToDoList';
import {ToDoItem} from '../ToDoItem';
import {CreateToDoButton} from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';
import { ToDoContentLoader } from '../ToDoContentLoader';

import './App.css';

function AppUI() {
    const value = React.useContext(ToDoContext);
    return (
        <React.Fragment>
            <header className="App-header">
                <ToDoCounter/>
                <ToDoSearch />
            </header>
            <ToDoList>
                {value.errorState && <p>Hubo un error: {value.errorState.message}</p>}
                {value.loadingState && <ToDoContentLoader/> }
                {(!value.loadingState && !value.filteredTodos.length) && <p>Crea tu primer ToDo.</p>}
                {value.filteredTodos.map(todo => (
                <ToDoItem
                    key={value.filteredTodos.indexOf(todo)}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={()=>{value.toggleCompleteToDo(todo.text)}}
                    onDelete={()=>{value.deleteToDo(todo.text)}}
                />
                ))}
            </ToDoList>
            {value.modalState && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}
            <CreateToDoButton />
        </React.Fragment>
    );
}

export {AppUI};