import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Increm } from "../src/increm";

describe("test--1", () => {
  it("icrem", () => {
    render(<Increm></Increm>);
    screen.debug();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
