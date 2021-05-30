import React from "react";
import { render, screen } from "../testUtils";
import Footer from "../../components/Footer";

describe("Footer", () => {
  it("should render the heading", () => {
    render(<Footer />);

    const heading = screen.getByText(
      /Privacy/i
    );

    expect(heading).toBeInTheDocument();
  });
});