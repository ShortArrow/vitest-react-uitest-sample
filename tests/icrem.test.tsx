import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Increm } from "../src/increm";

describe("increment button UI", () => {
  it("icrem", async () => {
    render(<Increm />);
    screen.debug();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    await userEvent.click(screen.getByText("+"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
