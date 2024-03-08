import React from "react";
import { useMemo } from "react";
import { useAppSelector } from "src/redux/store";
import AirportCard from "src/components/AirportCard/index";
import SearchPanel from "src/components/SearchPanel";

function App() {
  const { airports, loading } = useAppSelector((state) => state.airports);

  const renderedAirports = useMemo(() => {
    return airports.map((airport, key) => {
      return <AirportCard {...airport} key={key} />;
    });
  }, [airports]);
  const isAirports = airports.length > 0;
  return (
    <div>
      <SearchPanel />
      <div className="flex pl-4">
        {isAirports ? renderedAirports : "Nothing found"}
      </div>
    </div>
  );
}

export default App;
