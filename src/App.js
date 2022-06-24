 import React from 'react';

 import {ToDoCounter} from './ToDoCounter';
 import {ToDoSearch} from './ToDoSearch';
 import {ToDoList} from './ToDoList';
 import {ToDoItem} from './ToDoItem';
 import {CreateToDoButton} from './CreateToDoButton';

// import './App.css';

const todos = [
  {text:"Curso Intro React"},
  {text:"Curso Advance React"},
  {text:"Portfolio with React"},
  {text:"SIF with React"}
];

function App() {
  return (
    <React.Fragment>
    <ToDoCounter />
    <ToDoSearch />
    <ToDoList>
        {todos.map(todo => (
          <ToDoItem key={todos.indexOf(todo)} text={todo.text}/>
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
