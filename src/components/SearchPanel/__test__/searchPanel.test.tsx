import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "src/redux/store";
import SearchPanel from "../index";

test("Rendering search panel and checking button clicking which trigger error of empty input, text error below", async () => {
  render(
    <Provider store={store}>
      <SearchPanel />
    </Provider>
  );
  const button = screen.getByRole("button");
  fireEvent.click(button, "click");
  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(
    screen.getByText("Length of airport name should be more than two letters")
  ).toBeInTheDocument();
});
