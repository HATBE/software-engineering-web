import { useEffect, useState } from "react";
import { getTodos, removeTodo } from "../services/TodoService";
import TodoItem from "../components/TodoItem";
import Todo from "../services/Todo";

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  function handleDelete(id: string) {
    removeTodo(id);
    setTodos(getTodos());
  }

  return (
    <div>
      <h1>Your Todos</h1>
      <hr />
      {todos.length === 0 && <p>No todos found</p>}
      {todos.length > 0 && <h2>Count: {todos.length}</h2>}

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={handleDelete}
            see={true}
          />
        ))}
      </ul>
    </div>
  );
}
