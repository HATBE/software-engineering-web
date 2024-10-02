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

  // Handle input changes
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handle form submission
  function onClickSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent page reload

    // Propagate the form data to the parent component via addTodo
    prop.addTodo({ name: formData.name, text: formData.text, id: null });

    // Optionally clear the form after submission
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
            onChange={handleChange} // Attach the change handler to the input
          />
        </div>
        <div>
          <label>Todo:</label>
          <input
            name="text"
            type="text"
            value={formData.text}
            onChange={handleChange} // Attach the change handler to the input
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
