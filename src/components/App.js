import { useState } from "react";
import AppTitle from "./AppTitle";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodo] = useState([]);

  function handleTodo(newTodo) {
    setTodo((todos) => [...todos, newTodo]);
  }
  return (
    <div className="app">
      <div className="app-container">
        <AppTitle />

        <CreateTodo onTodo={handleTodo} />
        {todos.length !== 0 ? <TodoList todos={todos} /> : ""}
      </div>
    </div>
  );
}
