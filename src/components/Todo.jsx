import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <p onClick={() => dispatch(deleteTodo(todo.id))}>{todo.title}</p>
    </div>
  );
};

export default Todo;
