import TodoList from "./TodoList.tsx";
import {useState} from "react";
import Todo from "../Todo.ts";
import CreateTodo from "./CreateTodo.tsx";

export default function TodoPage() {
    const [todos, setTotos] = useState<Todo[]>([]);

    function addTodo(todo: Todo) {
        setTotos([...todos, todo]);
    }

    return (
        <>
            <h1>TODO Liste</h1>d
            <p>Dies ist eine TODO Liste. Trage Name und Tätigkeit ein.</p>

            <CreateTodo addTodo={addTodo} />
            <TodoList todos={todos} />
        </>
    )
}