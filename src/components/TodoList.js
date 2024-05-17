import Todo from "./Todo";

export default function TodoList({ todos, onToggleItem }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} onToggleItem={onToggleItem} key={todo.id} />
      ))}

      <div className="actions">
        <p>5 items left</p>

        <p>
          <span>All</span>
          <span>Active</span>
          <span>Completed</span>
        </p>

        <button>Clear completed</button>
      </div>
    </ul>
  );
}
