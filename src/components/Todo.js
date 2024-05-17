export default function Todo({ todo, onToggleItem }) {
  return (
    <li onClick={() => onToggleItem(todo.id)}>
      <div
        className={`check-todo ${todo.completed ? "check-todo-active" : ""}`}
      >
        {todo.completed && <img src="images/icon-check.svg" alt="check icon" />}
      </div>

      <span className={todo.completed && "todo-completed"}>{todo.task}</span>
    </li>
  );
}
