import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import CreateTodoPage from "./pages/CreateTodoPage";
import TodosPage from "./pages/TodosPage";
import TodoPage from "./pages/TodoPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/create" element={<CreateTodoPage />} />
          <Route path="/todos/:todoid" element={<TodoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
