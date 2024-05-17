export default function Todo({ todo }) {
  console.log(todo);
  return (
    <li>
      <div className="check-todo"></div>
      <span>{todo.task}</span>
    </li>
  );
}
