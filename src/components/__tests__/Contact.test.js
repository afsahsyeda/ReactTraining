import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Should test if the Contact component is rendered", () => {
  it("Should test if the heading is loaded", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });
});
