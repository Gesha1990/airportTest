import React from "react";
import { useMemo } from "react";
import { useAppSelector } from "src/redux/store";
import AirportCard from "src/components/AirportCard/index";
import SearchPanel from "src/components/SearchPanel";
import { NavLink } from "react-router-dom";

function SearchAirportPage() {
  const { airports, loading } = useAppSelector((state) => state.airports);

  const renderedAirports = useMemo(() => {
    return airports.map((airport, key) => {
      return (
        <NavLink
          to={`routes/${airport.icao}`}
          key={key}
          className="m-4 min-h-36"
        >
          <AirportCard {...airport} />
        </NavLink>
      );
    });
  }, [airports]);
  const isAirports = airports.length > 0;

  return (
    <div>
      <SearchPanel />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center pl-4">
          {isAirports ? renderedAirports : "Nothing found"}
        </div>
      )}
    </div>
  );
}

export default SearchAirportPage;
