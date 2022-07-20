import React from 'react';
import {useLocalStorage} from './useLocalStorage';

function useTodos() {
    const localStorageKey = 'cIntroReact-todos-v1';
    const {
        item:todos,
        saveItem:setTodos,
        loadingState,
        errorState,
    } = useLocalStorage(localStorageKey,[]);

    const [searchValue, setSearchValue] = React.useState('');
    const [modalState, setModalState] = React.useState(false);

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase())) || [];
    const completedTodos = filteredTodos.filter(todo => todo.completed).length;
    const totalTodos = filteredTodos.length;

    const toggleCompleteToDo = (text) => {
        const updatedTodos = todos.map(todo => {
        return {
            text: todo.text,
            completed: todo.text === text ? !todo.completed : todo.completed
        }
        });
        setTodos(updatedTodos);
    }

    const deleteToDo = (text) => {
        const updatedTodos = todos.filter(todo => todo.text !== text);
        setTodos(updatedTodos);
    }

    const addToDo = (text) => {
        const updatedTodos = [...todos];
        updatedTodos.push({
            text:text,
            completed:false
        });
        setTodos(updatedTodos);
    }
    return (
        {
                loadingState,
                errorState,
                addToDo,
                filteredTodos,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                toggleCompleteToDo,
                deleteToDo,
                modalState,
                setModalState
            }
    );
}

export { useTodos };