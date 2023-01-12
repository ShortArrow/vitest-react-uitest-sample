import { describe, it, expect } from "vitest";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("test--1", () => {
  it("render", () => {
    const text = "Hello Test";
    render(<div></div>);
    screen.debug();
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
