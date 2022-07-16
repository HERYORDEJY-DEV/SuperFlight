export interface Itineraries {
  id: string;
  legs: Array<string>;
  price: string;
  agent: string;
  agent_rating: string;
  _legs?: Array<Legs>;
}

export interface Legs {
  id: string;
  departure_airport: string;
  arrival_airport: string;
  departure_time: string;
  arrival_time: string;
  stops: string;
  airline_name: string;
  airline_id: string;
  duration_mins: string;
}
