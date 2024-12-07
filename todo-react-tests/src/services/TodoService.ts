import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

const storageKey = "todos";

function saveTodos(todos: Todo[]): void {
  localStorage.setItem(storageKey, JSON.stringify(todos));
}

export function addTodo(todo: Todo): string {
  const todos = getTodos();
  const newTodo: Required<Todo> = { ...todo, id: uuidv4() };
  todos.push(newTodo);
  saveTodos(todos);

  return newTodo.id;
}

export function removeTodo(id: string): void {
  const todos = getTodos();
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(updatedTodos);
}

export function getTodoById(id: string): Todo | undefined {
  const todos = getTodos();
  return todos.find((todo) => todo.id === id);
}

export function getTodos(): Todo[] {
  const savedTodos = localStorage.getItem(storageKey);
  return savedTodos ? JSON.parse(savedTodos) : [];
}
