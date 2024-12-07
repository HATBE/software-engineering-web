import {it} from "@jest/globals";
import {userEvent} from "@testing-library/user-event";
import CreateTodoPage from "../src/pages/CreateTodoPage";
import {render, screen} from "@testing-library/react";
import {getTodos} from "../src/services/TodoService";

beforeEach(() => {
    localStorage.clear();
});


it("add new todos", () => {
    const user = userEvent.setup();

    render(<CreateTodoPage />);

    const nameInput = screen.getByLabelText("Name:");
    const textInput = screen.getByLabelText("Todo:");
    const submitButton = screen.getByRole("button", {name: "Submit"});

    user.type(nameInput, "Test Todo");
    user.type(textInput, "This is a test todo");
    user.click(submitButton);

    const todos = getTodos();

    console.log(todos);

});