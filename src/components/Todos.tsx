import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[], deleteHandler: (todoId: string) => void }> = (props) => {

    
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem deleteHandler={props.deleteHandler.bind(null, item.id)} key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
