import { render, screen } from "@testing-library/react";
import EmailVerification from "../Pages/Authentication/EmailVerification";

test("render Verify Email as text", () => {
  render(<EmailVerification />);
  const emailVerificationButton = screen.getByText(/Verify Email/i);
  expect(emailVerificationButton).toBeInTheDocument();
});
