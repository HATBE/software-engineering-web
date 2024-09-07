const todoSubmitEl: HTMLButtonElement | null = document.getElementById(
  "submit"
) as HTMLButtonElement | null;
const nameEl: HTMLInputElement | null = document.getElementById(
  "name"
) as HTMLInputElement | null;
const todoTextEl: HTMLInputElement | null = document.getElementById(
  "todoText"
) as HTMLInputElement | null;
const todoListEl: HTMLElement | null = document.getElementById("todoList");

type Todo = {
  id: number;
  name: string;
  todoText: string;
};

let id = 0;

let todos: Todo[] = [];

todoSubmitEl?.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !nameEl ||
    nameEl.value === "" ||
    !todoTextEl ||
    todoTextEl.value === ""
  ) {
    return;
  }

  const name = nameEl.value;
  const todoText = todoTextEl.value;

  const todo: Todo = {
    id,
    name,
    todoText,
  };

  id++;

  todos.push(todo);

  nameEl.value = "";
  todoTextEl.value = "";

  renderTodos();
});

function renderTodos() {
  if (!todoListEl) {
    return;
  }

  todoListEl.innerHTML = "";
  todos.forEach((todo) => {
    const newTodoEl = document.createElement("li");

    const newTodoTextEl = document.createElement("p");
    newTodoTextEl.textContent = `${todo.name}: ${todo.todoText}`;

    newTodoEl.appendChild(newTodoTextEl);

    const xBtn = document.createElement("button");
    xBtn.id = String(todo.id);

    xBtn.addEventListener("click", () => {
      todos = todos.filter((obj) => obj.id !== Number(xBtn.id));
      renderTodos();
    });

    xBtn.textContent = "X";

    newTodoEl.appendChild(xBtn);

    todoListEl.appendChild(newTodoEl);
  });
}
