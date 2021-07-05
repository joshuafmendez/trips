import { createContext, useState } from "react";

export const TripsStore = createContext();

export const TripsStoreProvider = (props) => {
  const [trips, setTrips] = useState([]);
  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  }
  return (
    <TripsStore.Provider value={{ trips, setTrips, addTrip }}>
      {props.children}
    </TripsStore.Provider>
  );
};
