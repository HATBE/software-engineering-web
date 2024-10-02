import "./App.css";
import TodoPage from "./components/TodoPage.tsx";

function App() {
  return (
    <main className="grid">
      <div className="card">
        <TodoPage />
      </div>
    </main>
  );
}

export default App;
