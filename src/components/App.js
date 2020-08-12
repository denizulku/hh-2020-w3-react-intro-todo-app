import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([
    { id: uuid(), todo: "Coffee", completed: true },
  ]);
  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
