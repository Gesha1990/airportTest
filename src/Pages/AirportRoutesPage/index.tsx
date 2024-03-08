import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useMemo } from "react";
import { fetchRoutesByIcao } from "src/redux/slices/routesSlice";
import { useAppDispatch, useAppSelector } from "src/redux/store";
import { BackSvg } from "src/assets";
import Table from "src/components/Table";

function AirportRoutesPage() {
  const { icao } = useParams();
  const dispatch = useAppDispatch();
  const { routes, loading } = useAppSelector((state) => state.routes);

  useEffect(() => {
    dispatch(fetchRoutesByIcao(icao as string));
  }, []);

  const renderedRoutes = useMemo(() => {
    return routes.map((route, key) => {
      return (
        <tr key={key}>
          <td>{route.destination.name}</td>
          <td>{`${route.destination?.location?.lat}, ${route.destination?.location?.lon}`}</td>
          <td>{route.destination.icao}</td>
        </tr>
      );
    });
  }, [routes]);

  return (
    <div className="p-6">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={BackSvg} alt="back" className="cursor-pointer" />
        </NavLink>
      </div>
      <h1 className="ml-3 text-center">Airport Routes</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Table
          titles={["Name", "Location", "ICAO"]}
          rowItems={renderedRoutes}
        />
      )}
    </div>
  );
}

export default AirportRoutesPage;
