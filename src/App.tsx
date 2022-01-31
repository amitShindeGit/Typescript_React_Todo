import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

// const arr =  ["Fried chicken", "Gravyy Chicken"]

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  }

  const deleteHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  };

  // const todo = [
  //   new Todo("Fried chicken"),
  //   new Todo("Gravyy Chicken")
  // ];

  return (
    <React.Fragment>
    <Todos items={todos} deleteHandler={deleteHandler} />
    <NewTodo onAddTodo={addTodoHandler} />
    </React.Fragment>
  );
}

export default App;
