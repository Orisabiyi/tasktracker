import { useState } from "react";
import AppTitle from "./AppTitle";
import CreateTodo from "./CreateTodo";

export default function App() {
  const [todo, setTodo] = useState([]);

  function handleTodo(newTodo) {
    setTodo((todos) => [...todos, newTodo]);
  }
  return (
    <div className="app">
      <div className="app-container">
        <AppTitle />

        <CreateTodo onTodo={handleTodo} />
      </div>
    </div>
  );
}
