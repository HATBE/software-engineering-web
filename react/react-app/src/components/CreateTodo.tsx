import Todo from "../Todo.ts";

interface CreateTodoProps {
    addTodo: (todo: Todo) => void
}

export default function CreateTodo(prop: CreateTodoProps) {

    function onClickSubmit(event: React.FormEvent) {
        event.preventDefault(); // Prevent page reload
        prop.addTodo({ name: "hand", text: "peter" });
    }

    return (
        <>
            <form onSubmit={onClickSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Todo:</label>
                    <input type="text"/>
                </div>
                <button >Submit</button>
            </form>
        </>
    )
}