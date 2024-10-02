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
      <ul>
        {prop.todos.map((todo) => (
          <TodoItem todo={todo} removeTodo={prop.removeTodo} />
        ))}
      </ul>
    </>
  );
}
