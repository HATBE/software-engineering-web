import Todo from "../Todo.ts";

interface TodoItemProp {
    todo: Todo
}

export default function TodoItem(prop: TodoItemProp) {
    return (
        <li>
            <p>{prop.todo.name}: {prop.todo.text}</p>
        </li>
    )
}