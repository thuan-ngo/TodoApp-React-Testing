import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should have empty input when add button is cliked", () => {
    const { getByPlaceholderText } = render(
      <AddInput setTodos={mockedSetTodo} todos={[]} />
    );

    const buttonElement = screen.getByRole("button", { name: /Add/i });
    const inputElement = getByPlaceholderText("Add a new task here...");
    fireEvent.change(inputElement, { target: { value: "New task" } });
    fireEvent.click(buttonElement);
    expect(mockedSetTodo).toHaveBeenCalled();
    expect(inputElement.value).toBe("");
  });

  it("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });
});
