import { useState } from "react";

export default function CreateTodo({ onTodo }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const todo = { task, id: crypto.randomUUID(), completed: false };

    // add task to todo list
    onTodo(todo);

    setTask("");
  }

  return (
    <form className="create-todo" onSubmit={handleSubmit}>
      <div className="check-todo"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
}
