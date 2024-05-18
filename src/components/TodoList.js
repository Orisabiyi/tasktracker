import Todo from "./Todo";

export default function TodoList({ todos, sortBy, onToggleItem, onDelItem }) {
  let sortedTodo;

  if (sortBy === "all") sortedTodo = todos;
  if (sortBy === "active")
    sortedTodo = todos
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  if (sortBy === "completed")
    sortedTodo = todos
      .slice()
      .sort((a, b) => Number(b.completed) - Number(a.completed));

  return (
    <ul className="todo-list">
      {sortedTodo.map((todo) => (
        <Todo
          todo={todo}
          onToggleItem={onToggleItem}
          onDelItem={onDelItem}
          key={todo.id}
        />
      ))}
    </ul>
  );
}
