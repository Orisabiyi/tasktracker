export default function AppTitle({ isDark, onIsDark }) {
  return (
    <div className="app-title">
      <h1>todo</h1>
      <button onClick={onIsDark}>
        <img
          src={isDark ? "images/icon-sun.svg" : "images/icon-moon.svg"}
          alt="moon icon"
        />
      </button>
    </div>
  );
}
