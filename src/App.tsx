import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import SearchAirportPage from "src/Pages/SearchAirportPage";
import AvailableAirportRoutes from "src/Pages/AirportRoutesPage";
import { store } from "src/redux/store";

const router = createHashRouter([
  {
    path: "/",
    element: <SearchAirportPage />
  },
  {
    path: "/routes/:icao",
    element: <AvailableAirportRoutes />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
