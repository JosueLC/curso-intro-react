 import React from 'react';

 import {ToDoCounter} from './ToDoCounter';
 import {ToDoSearch} from './ToDoSearch';
 import {ToDoList} from './ToDoList';
 import {ToDoItem} from './ToDoItem';
 import {CreateToDoButton} from './CreateToDoButton';

import './App.css';

const todos = [
  {text:"Curso Intro React", completed:true},
  {text:"Curso Advance React", completed:false},
  {text:"Portfolio with React", completed:false},
  {text:"SIF with React", completed:false}
];

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <ToDoCounter />
        <ToDoSearch />
      </header>
    <ToDoList>
        {todos.map(todo => (
          <ToDoItem
            key={todos.indexOf(todo)}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
