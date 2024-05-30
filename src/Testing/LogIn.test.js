import { render, screen } from "@testing-library/react";
import LogIn from "../Pages/Authentication/LogIn";

test("render Password as Placeholder text", () => {
  render(<LogIn />);
  const placeholderText = screen.getByPlaceholderText(/Password/i);
  expect(placeholderText).toBeInTheDocument();
});
