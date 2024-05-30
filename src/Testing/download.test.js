import { render, screen } from "@testing-library/react";
import Download from "../Pages/Download/download";

describe("Download Component", () => {
  test("render Download as text", () => {
    render(<Download />);
    const downloadButtonElement = screen.getByText("Download Sample JSON");
    expect(downloadButtonElement).toBeInTheDocument();
  });
});
