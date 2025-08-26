import React, { createContext, useState, useContext } from "react";

const RideContext = createContext();

export function RideProvider({ children }) {
  const [rideHistory, setRideHistory] = useState([]);

  const addRide = (ride) => {
    setRideHistory((prev) => [...prev, { id: Date.now().toString(), ...ride }]);
  };

  return (
    <RideContext.Provider value={{ rideHistory, addRide }}>
      {children}
    </RideContext.Provider>
  );
}

export function useRideContext() {
  return useContext(RideContext);
}
