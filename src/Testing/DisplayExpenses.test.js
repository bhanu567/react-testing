import { render, screen } from "@testing-library/react";
import DisplayExpenses from "../Pages/ExpenseTracker/DisplayExpenses";

describe("Button Element", () => {
  test("render edit as text", () => {
    render(<DisplayExpenses />);
    const editButtonElement = screen.getByText("EDIT");
    expect(editButtonElement).toBeInTheDocument();
  });
  test("render delete as text", () => {
    render(<DisplayExpenses />);
    const deleteButtonElement = screen.getByText("DELETE");
    expect(deleteButtonElement).toBeInTheDocument();
  });
});
