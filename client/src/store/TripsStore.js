import { createContext, useState } from "react";

export const TripsStore = createContext();

export const TripsStoreProvider = (props) => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  }
  return (
    <TripsStore.Provider value={{ trips, setTrips, addTrip, selectedTrip, setSelectedTrip }}>
      {props.children}
    </TripsStore.Provider>
  );
};
