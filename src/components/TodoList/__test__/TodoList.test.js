import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList", () => {
  const mockSetTodos = jest.fn();
  const todos = [
    { id: 1, task: "Task 1", completed: false },
    { id: 2, task: "Task 2", completed: false },
    { id: 3, task: "Task 3", completed: true },
  ];

  it("renders correctly", () => {
    render(
      <Router>
        <TodoList todos={todos} setTodos={mockSetTodos} />
      </Router>
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task 3")).toBeInTheDocument();
  });

  it("calculates the number of incomplete tasks correctly", () => {
    render(
      <Router>
        <TodoList todos={todos} setTodos={mockSetTodos} />
      </Router>
    );

    expect(screen.getByText("2 tasks left")).toBeInTheDocument();
  });

  it("updates task on click", () => {
    render(
      <Router>
        <TodoList todos={todos} setTodos={mockSetTodos} />
      </Router>
    );
    fireEvent.click(screen.getByText("Task 1"));
    expect(mockSetTodos).toHaveBeenCalled();
  });
});
