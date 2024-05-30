import { render, screen } from "@testing-library/react";
import ForgetPassword from "../Pages/Authentication/ForgetPassword";

test("render Email as label text", () => {
  render(<ForgetPassword />);
  const labelText = screen.getByLabelText(/Email/i);
  expect(labelText).toBeInTheDocument();
});
