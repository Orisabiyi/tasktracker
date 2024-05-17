import AppTitle from "./AppTitle";
import CreateTodo from "./CreateTodo";

export default function App() {
  return (
    <div className="app">
      <div className="app-container">
        <AppTitle />
        <CreateTodo />
      </div>
    </div>
  );
}
