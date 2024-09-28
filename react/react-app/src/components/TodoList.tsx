import TodoItem from "./TodoItem.tsx";
import Todo from "../Todo.ts";

interface TodoListProps {
    todos: Todo[]
}

export default function TodoList(prop: TodoListProps) {
    return (
        <>
          <ul>
              {prop.todos.map(todo =>
                  <TodoItem todo={todo}/>
              )}
          </ul>

        </>
    )
}