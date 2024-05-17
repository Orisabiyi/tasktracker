export default function Stats({ todos, onSortBy }) {
  const todoLength = todos.filter((todo) => todo.completed !== true).length;

  return (
    <div className="stats">
      <div> {todoLength} items left</div>

      <div>
        <button value="all" onClick={onSortBy}>
          All
        </button>
        <button value="active" onClick={onSortBy}>
          Active
        </button>
        <button value="completed" onClick={onSortBy}>
          Completed
        </button>
      </div>

      <div>Clear Completed</div>
    </div>
  );
}
