export default function Stats({ todos, sortBy, onSortBy, onSetTodo }) {
  const todoLength = todos.filter((todo) => todo.completed !== true).length;

  function handleClearTodo() {
    window.confirm("You want to clear the list of completed task.") &&
      onSetTodo((todos) => todos.filter((todo) => todo.completed !== true));
  }

  function sortValue(value) {
    return sortBy === value ? "active" : "";
  }

  return (
    <div className="stats">
      <div> {todoLength} items left</div>

      <div>
        <button value="all" onClick={onSortBy} className={sortValue("all")}>
          All
        </button>

        <button
          value="active"
          onClick={onSortBy}
          className={sortValue("active")}
        >
          Active
        </button>

        <button
          value="completed"
          onClick={onSortBy}
          className={sortValue("completed")}
        >
          Completed
        </button>
      </div>

      <button onClick={handleClearTodo}>Clear Completed</button>
    </div>
  );
}
