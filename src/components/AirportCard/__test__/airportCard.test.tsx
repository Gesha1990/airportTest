import React from "react";
import { render, screen } from "@testing-library/react";
import AirportCard from "../index";

test("Airport card rendering", async () => {
  render(
    <AirportCard
      icao="Some ICAO"
      location={{ lat: 222, lon: 111 }}
      name="some name"
    />
  );
  expect(screen.getByText("Some ICAO")).toBeInTheDocument();
});
