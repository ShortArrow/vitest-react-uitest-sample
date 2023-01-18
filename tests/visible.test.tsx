import React from "react";
import { render, screen } from "@testing-library/react";

describe("test--1", () => {
  it("render", () => {
    const text = "Hello Test";
    render(<div>{text}</div>);
    screen.debug();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
