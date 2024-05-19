export default function Todo({ todo, onToggleItem, onDelItem }) {
  return (
    <li onClick={() => onToggleItem(todo.id)}>
      <div
        className={`check-todo ${todo.completed ? "check-todo-active" : ""}`}
      >
        {todo.completed && <img src="images/icon-check.svg" alt="check icon" />}
      </div>

      <span className={todo.completed && "todo-completed"}>{todo.task}</span>

      <div onClick={() => onDelItem(todo.id)}>
        <img src="images/icon-cross.svg" alt="close-icon" />
      </div>
    </li>
  );
}
