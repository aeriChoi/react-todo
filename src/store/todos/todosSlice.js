import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('todos')) || [],
  reducers: {
    addTodo: (state, action) => {
      const { id, title, description, rank, date } = action.payload
      state.push({
        id: id,
        title: title,
        description: description,
        rank: rank,
        date: date,
        completed: false,
      })
      localStorage.setItem('todos', JSON.stringify(state))
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(action.payload))
      }
    },
    removeTodo: (state, action) => {
      const id = Number(action.payload.id);
      const items = JSON.parse(localStorage.getItem('todos'));
      const filtered = items.filter((item) => item.id !== id);
      state.filter(toDo => toDo.id !== id);
      localStorage.setItem('todos', JSON.stringify(filtered))
    }
  }
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer