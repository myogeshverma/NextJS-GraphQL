import React from "react";
import { render, screen } from "../testUtils";
import Footer from "../../components/Footer";

describe("Add comment", () => {
  it("should render the heading", () => {
    render(<Footer />);

    const heading = screen.getByText(
      /Add a new comment/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});