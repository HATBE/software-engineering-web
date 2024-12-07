import { useNavigate, useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { getTodoById, removeTodo } from "../services/TodoService";

export default function TodoPage() {
  const { todoid } = useParams();
  const navigate = useNavigate();

  function handleDelete(id: string) {
    removeTodo(id);
    navigate("/todos");
  }

  if (!todoid) {
    return <h1>Todo ID not found</h1>;
  }

  const todo = getTodoById(todoid);

  if (!todo) {
    return <h1>Todo not found</h1>;
  }

  return (
    <>
      <h1>TODO {todoid}</h1>
      <hr />
      <TodoItem todo={todo} removeTodo={handleDelete} see={false} />
    </>
  );
}
