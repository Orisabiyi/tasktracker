import { useState } from "react";
import AppTitle from "./AppTitle";
import CreateTodo from "./CreateTodo";
import Stats from "./Stats";
import TodoList from "./TodoList";
import { useLocalStorage } from "../state/useLocalStorage";

export default function App() {
  const [todos, setTodo] = useLocalStorage("todos");
  const [sortBy, setSortBy] = useState("all");
  const [isDark, setIsDark] = useState(false);

  function handleTodo(newTodo) {
    setTodo((todos) => [...todos, newTodo]);
  }

  function handleDeleteItem(id) {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
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
  }

  function handleIsDark() {
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className={`app ${isDark ? "app-dark" : ""}`}>
      <button onClick={handleIsDark}>
        <img
          src={isDark ? "images/icon-sun.svg" : "images/icon-moon.svg"}
          alt="an icon that depicts current mode of the appliation either"
        />
      </button>

      <div className="app-container">
        <AppTitle />

        <CreateTodo onTodo={handleTodo} isDark={isDark} />

        {todos.length !== 0 && (
          <div
            className={`todo-container ${isDark ? "todo-container-dark" : ""}`}
          >
            <TodoList
              todos={todos}
              sortBy={sortBy}
              onToggleItem={handleToggleItem}
              onDelItem={handleDeleteItem}
            />

            <Stats
              todos={todos}
              sortBy={sortBy}
              onSetTodo={setTodo}
              onSortBy={handleSortBy}
            />
          </div>
        )}
      </div>
    </div>
  );
}
