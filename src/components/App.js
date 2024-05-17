import { useState } from "react";
import AppTitle from "./AppTitle";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodo] = useState([]);
  const [sortBy, setSortBy] = useState("all");
  const [isDark, setIsDark] = useState(false);

  function handleTodo(newTodo) {
    setTodo((todos) => [...todos, newTodo]);
  }

  function handleToggleItem(id) {
    console.log(todos.filter((todo) => todo.id === id));
    setTodo((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleSortBy(e) {
    setSortBy(e.target.value);
    console.log(e.target.value);
  }

  function handleIsDark() {
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className="app">
      <div className="app-container">
        <AppTitle onIsDark={handleIsDark} />

        <CreateTodo onTodo={handleTodo} />

        {todos.length !== 0 ? (
          <TodoList
            todos={todos}
            sortBy={sortBy}
            onToggleItem={handleToggleItem}
            onSortBy={handleSortBy}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
