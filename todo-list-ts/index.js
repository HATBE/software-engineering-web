"use strict";
const todoSubmitEl = document.getElementById("submit");
const nameEl = document.getElementById("name");
const todoTextEl = document.getElementById("todoText");
const todoListEl = document.getElementById("todoList");
let id = 0;
let todos = [];
todoSubmitEl === null || todoSubmitEl === void 0 ? void 0 : todoSubmitEl.addEventListener("click", (event) => {
    event.preventDefault();
    if ((nameEl && nameEl.value == "") ||
        (todoTextEl && todoTextEl.value == "")) {
        return;
    }
    if (nameEl == null || todoTextEl == null) {
        return;
    }
    const name = nameEl === null || nameEl === void 0 ? void 0 : nameEl.value;
    const todoText = todoTextEl === null || todoTextEl === void 0 ? void 0 : todoTextEl.value;
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
