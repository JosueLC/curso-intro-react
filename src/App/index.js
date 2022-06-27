 import React from 'react';

 import {ToDoCounter} from '../ToDoCounter';
 import {ToDoSearch} from '../ToDoSearch';
 import {ToDoList} from '../ToDoList';
 import {ToDoItem} from '../ToDoItem';
 import {CreateToDoButton} from '../CreateToDoButton';

import './App.css';

const default_todos = [
  {text:"Curso Intro React", completed:false},
  {text:"Curso Advance React", completed:false},
  {text:"Portfolio with React", completed:false},
  {text:"SIF with React", completed:false}
];

function App() {
  const [todos, setTodos] = React.useState(default_todos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
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

  return (
    <React.Fragment>
      <header className="App-header">
        <ToDoCounter
          total = {totalTodos}
          completed={completedTodos}
        />
        <ToDoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </header>
    <ToDoList>
        {filteredTodos.map(todo => (
          <ToDoItem
            key={todos.indexOf(todo)}
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>{toggleCompleteToDo(todo.text)}}
            onDelete={()=>{deleteToDo(todo.text)}}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
