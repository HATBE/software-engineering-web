import {it} from "@jest/globals";
import {UserEvent, userEvent} from "@testing-library/user-event";
import CreateTodoPage from "../src/pages/CreateTodoPage";
import {render, screen} from "@testing-library/react";
import {MemoryRouter, useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {getLocalStorageMock} from "./mocks";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

jest.mock("uuid", () => ({
    v4: jest.fn(),
}));

describe("Create Todo Page", () => {

    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (uuidv4 as jest.Mock).mockReturnValue("mock-id");
    let getItemSpy: jest.SpyInstance, setItemSpy: jest.SpyInstance;
    let user: UserEvent;

    beforeEach(() => {
        const localStorageMock = getLocalStorageMock();
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
        });

        getItemSpy = jest.spyOn(window.localStorage, 'getItem');
        setItemSpy = jest.spyOn(window.localStorage, 'setItem');

        user = userEvent.setup();
    })

    afterEach(() => {
        jest.clearAllMocks();
        getItemSpy.mockRestore()
        setItemSpy.mockRestore()
    });

    it("should initially render empty input fields", async () => {
        render(
            <MemoryRouter>
                <CreateTodoPage />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText("Name:");
        const textInput = screen.getByLabelText("Todo:");
        const submitButton = screen.getByRole("button", {name: "Submit"});

        expect(nameInput).toBeEmptyDOMElement()
        expect(textInput).toBeEmptyDOMElement()
        expect(submitButton).toBeInTheDocument()
    });

    it("should update the value of input fields as the user types", async () => {
        render(
            <MemoryRouter>
                <CreateTodoPage />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText("Name:");
        const textInput = screen.getByLabelText("Todo:");

        await user.type(nameInput, "Test Todo");
        await user.type(textInput, "This is a test todo");

        expect(nameInput).toHaveValue("Test Todo")
        expect(textInput).toHaveValue("This is a test todo")
    });

    it("should add new todo when the user submits the form", async () => {
        render(
            <MemoryRouter>
                <CreateTodoPage />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText("Name:");
        const textInput = screen.getByLabelText("Todo:");
        const submitButton = screen.getByRole("button", {name: "Submit"});

        await user.type(nameInput, "Test Todo");
        await user.type(textInput, "This is a test todo");
        await user.click(submitButton);

        expect(setItemSpy).toHaveBeenCalledWith('todos', JSON.stringify(
            [{ name: 'Test Todo', text: 'This is a test todo', id: 'mock-id' }]
        ));

        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/todos/mock-id');

        expect(getItemSpy).toHaveBeenCalledTimes(1);
        expect(getItemSpy).toHaveBeenCalledWith('todos');
    });

    it("should not add todo if name or text are missing", async () => {
        render(
            <MemoryRouter>
                <CreateTodoPage />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText("Name:");
        const submitButton = screen.getByRole("button", {name: "Submit"});

        await user.type(nameInput, "Test Todo");
        await user.click(submitButton);

        expect(setItemSpy).not.toHaveBeenCalled();
        expect(mockNavigate).not.toHaveBeenCalled();
        expect(getItemSpy).not.toHaveBeenCalled();
    });

    it("should reset form inputs after submitting a todo", async () => {
        render(
            <MemoryRouter>
                <CreateTodoPage />
            </MemoryRouter>
        );

        const nameInput = screen.getByLabelText("Name:");
        const textInput = screen.getByLabelText("Todo:");
        const submitButton = screen.getByRole("button", {name: "Submit"});

        await user.type(nameInput, "Test Todo");
        await user.type(textInput, "This is a test todo");
        await user.click(submitButton);

        expect(nameInput).toBeEmptyDOMElement()
        expect(textInput).toBeEmptyDOMElement()
    });

})



