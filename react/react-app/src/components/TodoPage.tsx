import TodoList from "./TodoList.tsx";
import { useState } from "react";
import Todo from "../Todo.ts";
import CreateTodo from "./CreateTodo.tsx";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [num, setNum] = useState(1);

  function addTodo(todo: Todo) {
    todo.id = num;
    setTodos([...todos, todo]);
    setNum(num + 1);
  }

  function removeTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id != id));
  }

  return (
    <>
      <h1>TODO Liste</h1>
      <p>Dies ist eine TODO Liste. Trage Name und Tätigkeit ein.</p>
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </>
  );
}
