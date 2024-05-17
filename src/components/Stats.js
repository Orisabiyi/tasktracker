export default function Stats({ todos, onSortBy, onSetTodo }) {
  const todoLength = todos.filter((todo) => todo.completed !== true).length;

  function handleClearTodo() {
    if (
      window.confirm(
        "Are you sure you want to clear the list. There is no turning back"
      )
    )
      onSetTodo([]);
  }

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

      <button onClick={handleClearTodo}>Clear Completed</button>
    </div>
  );
}
