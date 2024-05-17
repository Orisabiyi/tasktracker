import Stats from "./Stats";
import Todo from "./Todo";

export default function TodoList({
  todos,
  sortBy,
  isDark,
  onToggleItem,
  onSortBy,
}) {
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

  console.log(sortedTodo);

  return (
    <ul className={`todo-list ${isDark && "todo-list-dark"}`}>
      {sortedTodo.map((todo) => (
        <Todo
          todo={todo}
          onToggleItem={onToggleItem}
          isDark={isDark}
          key={todo.id}
        />
      ))}

      <Stats todos={todos} onSortBy={onSortBy} />
    </ul>
  );
}
