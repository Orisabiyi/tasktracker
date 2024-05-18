import { useState } from "react";

export default function CreateTodo({ onTodo, isDark }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return alert("Provide a task");

    const todo = { task, id: crypto.randomUUID(), completed: false };

    onTodo(todo); // add task to todo list
    setTask(""); // reset task input
  }

  return (
    <form className="create-todo" onSubmit={handleSubmit}>
      <div className="check-todo"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={isDark ? "input-dark" : ""}
      />
    </form>
  );
}
