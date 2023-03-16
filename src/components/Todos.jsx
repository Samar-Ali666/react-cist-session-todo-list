import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../features/todo/todoSlice";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [todos]);

  return (
    <div className="container">
      <AddTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
