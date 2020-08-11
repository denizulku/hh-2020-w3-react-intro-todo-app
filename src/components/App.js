import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}
