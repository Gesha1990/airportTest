import React from "react";
import { IProps } from "./interfaces";

function AirportCard(props: IProps) {
  const { name, location, icao } = props;
  return (
    <div className="mx-2 block min-h-full w-40 cursor-pointer border p-4 hover:shadow-xl">
      <div>
        <span className="font-bold">Name: </span>
        {name}
      </div>
      <div>
        <div>
          <span className="font-bold">Location:</span>
          {` ${location?.lat}, ${location?.lon}`}
        </div>
      </div>
      <div>
        <span className="font-bold">ICAO: </span>
        {icao}
      </div>
    </div>
  );
}

export default AirportCard;
