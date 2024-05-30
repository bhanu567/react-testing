import { render, screen } from "@testing-library/react";
import UpdateProfile from "../Pages/Authentication/UpdateProfile";

test("render complete Now as text", () => {
  render(<UpdateProfile />);
  const updateProfileButtonElement = screen.getByText(/Complete Now/i);
  expect(updateProfileButtonElement).toBeInTheDocument();
});
