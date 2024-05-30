import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home";

test("render Home as text", () => {
  render(<Home />);
  const home = screen.getByText(/welcome to expense tracker/i);
  expect(home).toBeInTheDocument();
});
