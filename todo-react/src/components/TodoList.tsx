import TodoItem from "./TodoItem.tsx";
import Todo from "../Todo.ts";

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
}

export default function TodoList(prop: TodoListProps) {
  return (
    <>
      <h1>Erfasste TODOS:</h1>
      <div>
        <b>{prop.todos.length}</b> Todo
        {prop.todos.length != 1 && "s"}:
      </div>
      <ul>
        {prop.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} removeTodo={prop.removeTodo} />
          </li>
        ))}
      </ul>
    </>
  );
}
