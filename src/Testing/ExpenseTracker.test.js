import { render, screen } from "@testing-library/react";
import ExpenseTracker from "../Pages/ExpenseTracker/ExpenseTracker";

test("render Download Expense element", () => {
  render(<ExpenseTracker />);
  const button = screen.getByText(/Download Expense/i);
  expect(button).toBeInTheDocument();
});
