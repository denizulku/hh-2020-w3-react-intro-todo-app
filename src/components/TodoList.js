import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

export default function TodoList({ todos }) {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} completed={todo.completed} />
      ))}
    </section>
  );
}
