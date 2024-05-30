import { render, screen } from "@testing-library/react";
import SignUp from "../Pages/ExpenseTracker/SignUp";

describe("SignUp Button", () => {
  test("render SignUp as text", () => {
    render(<SignUp />);
    const buttonElement = screen.getByText(/SignUp/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
