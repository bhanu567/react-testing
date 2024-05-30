import { render, screen } from "@testing-library/react";
import Form from "../Pages/ExpenseTracker/Form";

test("render Category as Label text", () => {
  render(<Form />);
  const formLabelText = screen.getByLabelText(/Category/i);
  expect(formLabelText).toBeInTheDocument();
});
