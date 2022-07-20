import React from 'react';
import { useTodos } from './useTodos';
import { ToDoHeader } from '../ToDoHeader';
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton} from '../CreateToDoButton';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';
import { ToDoContentLoader } from '../ToDoContentLoader';
import './App.css';

function App() {
  const value = useTodos();
  return (
      <React.Fragment>
        <ToDoHeader>
          <ToDoCounter
            totalTodos={value.totalTodos}
            completedTodos={value.completedTodos}
          />
          <ToDoSearch
            searchValue={value.searchValue}
            setSearchValue={value.setSearchValue}
          />
        </ToDoHeader>
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
                <ToDoForm
                    addToDo={value.addToDo}
                    setModalState={value.setModalState}
                />
            </Modal>
        )}
        <CreateToDoButton
            modalState={value.modalState}
            setModalState={value.setModalState}
        />
      </React.Fragment>
  );
}

export default App;
