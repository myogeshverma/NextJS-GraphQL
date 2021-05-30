import React from "react";
import { render, screen } from "../testUtils";
import Home from "../../components/Footer";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<Home />);

    const heading = screen.getByText(
      /Suggested Repositories for /i
    );
    expect(heading).toBeInTheDocument();
  });
});