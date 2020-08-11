import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList() {
  return (
    <section className="TodoList">
      <Todo text="Coffee" completed />
      <Todo text="Milk" />
      <Todo text="Sugar" />
      <Todo text="Apples" />
    </section>
  )
}
