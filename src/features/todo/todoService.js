import axios from "axios";

const API_URL = "http://localhost:3030/todos/";

// Getting all todos
const getAllTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create Todo
const createTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

// delete Todo
const deleteTodo = async (todoId) => {
  const response = await axios.delete(API_URL + todoId);
  return response.data;
};

const todoService = {
  getAllTodos,
  createTodo,
  deleteTodo,
};

export default todoService;
