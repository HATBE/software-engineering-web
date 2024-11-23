import { useNavigate } from "react-router-dom";
import Todo from "../services/Todo.ts";

interface TodoItemProp {
  todo: Todo;
  removeTodo: (id: string) => void;
  see: boolean;
}

export default function TodoItem({ todo, removeTodo, see }: TodoItemProp) {
  const navigate = useNavigate();

  function deleteTodo() {
    removeTodo(todo.id!);
  }

  function jumpToItem() {
    navigate(`/todos/${todo.id}`);
  }

  return (
    <div className="todo-item">
      <p>
        {todo.name}: {todo.text}
      </p>
      <button className="delete" onClick={deleteTodo}>
        X
      </button>
      {see && (
        <button className="see" onClick={jumpToItem}>
          See
        </button>
      )}
    </div>
  );
}
