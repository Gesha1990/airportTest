export interface IAirPort {
  countryCode: string;
  iata: string;
  icao: string;
  localCode: string;
  location: { lat: number; lon: number };
  municipalityName: string;
  name: string;
  shortName: string;
}
interface IOperator {
  iata: string;
  icao: string;
  name: string;
}

export interface IRoute {
  averageDailyFlights: number;
  destination: {
    countryCode: string;
    iata: string;

    icao: string;
    localCode: string;
    location: {
      lat: number;
      lon: number;
    };
    municipalityName: string;
    name: string;

    shortName: string;
  };
  operators: IOperator[];
}
export interface IAirportResponse {
  data: {
    items: IAirPort[];
  };
}
export interface IRoutesResponse {
  data: {
    routes: IRoute[];
  };
}
export interface AirportState {
  airports: IAirPort[];
  loading: boolean;
  error: string;
}
export interface RoutsState {
  routes: IRoute[];
  loading: boolean;
  error: string;
}
