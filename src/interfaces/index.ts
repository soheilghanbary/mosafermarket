export interface CityProps {
  label: string;
  value: string;
}

export interface ListTicketRequestProps {
  origin: string;
  destination: string;
  departureDate: string;
  adult: number;
  child: number;
  infant: number;
}
