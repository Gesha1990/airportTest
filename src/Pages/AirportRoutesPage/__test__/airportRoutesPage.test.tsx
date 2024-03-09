import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import AirportRoutesPage from "../index";

test("Airport Routes page rendering", async () => {
  render(
    <Provider store={store}>
      <AirportRoutesPage />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  expect(screen.getByRole("img")).toBeInTheDocument();
});
