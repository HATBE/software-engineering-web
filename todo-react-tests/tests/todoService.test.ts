import { v4 as uuidv4 } from "uuid";
import {addTodo, getTodoById, getTodos, removeTodo} from "../src/services/TodoService";
import Todo from "../src/services/Todo";

jest.mock("uuid", () => ({
    v4: jest.fn(),
}));

beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
});

test("add new todos", () => {
    (uuidv4 as jest.Mock).mockReturnValue("uuid");

    const todo: Todo = { name: "Test Todo", text: "Test Desc" };
    addTodo(todo);

    const todos = getTodos();

    expect(todos).toEqual([{ id: "uuid", name: "Test Todo", text: "Test Desc" }]);
});

test("get todo by id", () => {
    const todos = [
        { id: "1", name: "Todo 1", text: "Desc 1" },
        { id: "2", name: "Todo 2", text: "Desc 2" },
    ];

    localStorage.setItem("todos", JSON.stringify(todos));

    removeTodo("1");

    const newTodos = getTodoById("2")
    expect(newTodos).toEqual({ id: "2", name: "Todo 2", text: "Desc 2" });
});


test("return undefined if id not found", () => {
    const todos = [
        { id: "1", name: "Todo 1", text: "Desc 1" },
        { id: "2", name: "Todo 2", text: "Desc 2" },
    ];
    localStorage.setItem("todos", JSON.stringify(todos));

    const todo = getTodoById("3");

    expect(todo).toBeUndefined();
});


test("return empty if no todoes exist", () => {
    const result = getTodos();

    expect(result).toEqual([]);
});