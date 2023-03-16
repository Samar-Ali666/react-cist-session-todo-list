import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");

    dispatch(createTodo({ title }));
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo">Todo</label>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your todo here"
            />
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
