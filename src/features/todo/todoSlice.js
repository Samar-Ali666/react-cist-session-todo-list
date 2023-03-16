import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
  todos: [],
  isSucess: false,
  isLoading: false,
  isError: false,
  message: "",
};

// Get all todos
export const getAllTodos = createAsyncThunk(
  "todo/getAll",
  async (_, thunkAPI) => {
    try {
      return await todoService.getAllTodos();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.message.response.data) ||
        error.message ||
        error.toSring();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create Todo
export const createTodo = createAsyncThunk(
  "todo/create",
  async (todo, thunkAPI) => {
    try {
      return await todoService.createTodo(todo);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.message.response.data) ||
        error.message ||
        error.toSring();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// delete Todo
export const deleteTodo = createAsyncThunk(
  "todo/delete",
  async (todoId, thunkAPI) => {
    try {
      return await todoService.deleteTodo(todoId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.message.response.data) ||
        error.message ||
        error.toSring();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.todos = action.payload;
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSucess = true;
        state.todos.filter((todo) => {
          todo.id !== action.payload.id;
        });
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;
