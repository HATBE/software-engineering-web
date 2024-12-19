import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../services/TodoService";
import Todo from "../services/Todo";

export default function CreateTodoPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Todo>({
    name: "",
    text: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function onClickSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.name === "" || formData.text === "") {
      return;
    }

    const todoId = addTodo(formData);

    setFormData({
      name: "",
      text: "",
    });

    navigate(`/todos/${todoId}`);
  }

  return (
    <>
      <form onSubmit={onClickSubmit}>
        <h1>Todo Erstellen</h1>
        <hr />
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="todo-input">Todo:</label>
          <input
            id="todo-input"
            name="text"
            type="text"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
