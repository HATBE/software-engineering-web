import Todo from "../Todo.ts";

interface TodoItemProp {
  todo: Todo;
  removeTodo: (id: number) => void;
}

export default function TodoItem(prop: TodoItemProp) {
  function deleteTodo() {
    prop.removeTodo(prop.todo.id!);
  }

  return (
    <li id={String(prop.todo.id)}>
      <p>
        {prop.todo.name}: {prop.todo.text}
      </p>
      <button onClick={deleteTodo}>X</button>
    </li>
  );
}
