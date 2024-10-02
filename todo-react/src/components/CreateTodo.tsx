import { useState } from "react";
import Todo from "../Todo";

interface FormData {
  name: string;
  text: string;
}

interface CreateTodoProps {
  addTodo: (todo: Todo) => void;
}

export default function CreateTodo(prop: CreateTodoProps) {
  const [formData, setFormData] = useState<FormData>({
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

  // Handle form submission
  function onClickSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formData.name === "" || formData.text === "") {
      return;
    }

    prop.addTodo({ name: formData.name, text: formData.text, id: null });

    setFormData({
      name: "",
      text: "",
    });
  }

  return (
    <>
      <form onSubmit={onClickSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Todo:</label>
          <input
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
