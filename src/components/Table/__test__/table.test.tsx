import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../index";

test("Table rendering", async () => {
  render(<Table titles={["some title"]} rowItems={[]} />);
  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByText("some title")).toBeInTheDocument();
});
