import Stats from "./Stats";
import Todo from "./Todo";

export default function TodoList({ todos, onToggleItem }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} onToggleItem={onToggleItem} key={todo.id} />
      ))}

      <Stats />
    </ul>
  );
}
