import { createContext, useState } from "react";

export const TripsStore = createContext();

export const TripsStoreProvider = (props) => {
  const [trips, setTrips] = useState([]);
  return (
    <TripsStore.Provider value={{ trips, setTrips }}>
      {props.children}
    </TripsStore.Provider>
  );
};
