const todoSubmitEl = document.getElementById("submit");
const nameEl = document.getElementById("name");
const todoTextEl = document.getElementById("todoText");
const todoListEl = document.getElementById("todoList");

let id = 0;

let todos = [];

todoSubmitEl.addEventListener("click", (event) => {
  event.preventDefault();

  const name = nameEl.value;
  const todoText = todoTextEl.value;

  if (name == "" || todoText == "") {
    return;
  }

  const todo = {
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
  todoListEl.innerHTML = "";
  todos.forEach((todo) => {
    const newTodoEl = document.createElement("li");

    const newTodoTextEl = document.createElement("p");
    newTodoTextEl.textContent = `${todo.name}: ${todo.todoText}`;

    newTodoEl.appendChild(newTodoTextEl);

    const xBtn = document.createElement("button");
    xBtn.id = todo.id;

    xBtn.addEventListener("click", () => {
      todos = todos.filter((obj) => obj.id !== Number(xBtn.id));
      renderTodos();
    });

    xBtn.textContent = "X";

    newTodoEl.appendChild(xBtn);

    todoListEl.appendChild(newTodoEl);
  });
}
