import React from 'react';
import './ToDoForm.css';

function ToDoForm({addToDo,setModalState}) {
    const [newToDoText,setNewToDoText] = React.useState('');

    const onChange = (event) => {
        setNewToDoText(event.target.value);
    }
    const onCancel = () => {
        setModalState(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoText);
        setModalState(false);
    };
    
    return (
        <form
            onSubmit={onSubmit}
        >
            <label>Escribe tu nuevo toDo:</label>
            <textarea
                value = {newToDoText}
                onChange={onChange}
                placeholder="Crear un ToDo sobre React"
            />
            <div className="ToDoForm-buttonsContainer">
                <button
                    type="button"
                    className="ToDoForm-button ToDoForm-button-cancel"
                    onClick={onCancel}
                    >
                    Cancelar
                </button>
                <button
                    className="ToDoForm-button ToDoForm-button-submit"
                    type="submit"
                >
                    Añadir ToDo
                </button>
            </div>
        </form>
    );
}

export {ToDoForm};