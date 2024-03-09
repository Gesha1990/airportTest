import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "src/redux/store";
import SearchAirportPage from "../index";

test("Search airport page rendering", async () => {
  render(
    <Provider store={store}>
      <SearchAirportPage />
    </Provider>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});
