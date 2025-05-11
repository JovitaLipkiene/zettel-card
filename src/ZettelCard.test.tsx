import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ZettelCard } from "./ZettelCard";

describe("ZettelCard Component", () => {
  it("renders the title and uniqueId correctly", () => {
    render(
      <ZettelCard
        uniqueId="12345"
        title="Test Title"
        cardContainerStyle={{}}
        cardHeaderChildren={[<span key="1">Header Child</span>]}
      >
        <p>Test Content</p>
      </ZettelCard>
    );

    // Check if the title is rendered
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Check if the uniqueId is rendered
    expect(screen.getByText("12345")).toBeInTheDocument();

    // Check if the header children are rendered
    expect(screen.getByText("Header Child")).toBeInTheDocument();
  });

  it("renders children content correctly", () => {
    render(
      <ZettelCard uniqueId="12345" title="Test Title">
        <p>Test Content</p>
      </ZettelCard>
    );

    // Check if the children content is rendered
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("toggles the menu visibility when the menu button is clicked", () => {
    render(
      <ZettelCard
        uniqueId="12345"
        title="Test Title"
        cardMenuChildren={[<span key="1">Menu Item</span>]}
      />
    );

    // Check that the menu is initially hidden
    expect(screen.queryByText("Menu Item")).not.toBeInTheDocument();

    // Click the menu button
    fireEvent.click(screen.getByText("..."));

    // Check that the menu is now visible
    expect(screen.getByText("Menu Item")).toBeInTheDocument();

    // Click the menu button again
    fireEvent.click(screen.getByText("..."));

    // Check that the menu is hidden again
    expect(screen.queryByText("Menu Item")).not.toBeInTheDocument();
  });

  it("applies custom styles to the container", () => {
    const customStyle = { backgroundColor: "red" };
    render(
      <ZettelCard
        uniqueId="12345"
        title="Test Title"
        cardContainerStyle={customStyle}
      />
    );

    // Check if the container has the custom style
    const container = screen.getByTestId("zettel-card-container");
    expect(container).toHaveStyle("background-color: red");
  });
});
