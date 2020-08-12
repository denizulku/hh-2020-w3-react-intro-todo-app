import React from "react";

export default function Todo({ todo, completed }) {
  return (
    <label className="Todo">
      <input checked={completed} type="checkbox" />
      {todo}
    </label>
  );
}
