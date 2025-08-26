import { useState, useEffect } from "react";
export default function useFetchFare(pickup, drop, vehicle) {
  const [fare, setFare] = useState(null);
  useEffect(() => {
    if (pickup && drop) {
      const distance = 30;
      const time = 45;
      const base = 50;
      const tolls = 40;
      const platformFee = 20;
      const surgeRate = 0.1;
      let perKm, perMin;
      if (vehicle === "Car") { perKm = 20; perMin = 3; }
      else if (vehicle === "Auto") { perKm = 15; perMin = 2; }
      else if (vehicle === "Bike") { perKm = 10; perMin = 1; }
      const distanceFare = distance * perKm;
      const timeFare = time * perMin;
      const subtotal = base + distanceFare + timeFare + tolls + platformFee;
      const surge = Math.round(subtotal * surgeRate);
      const total = subtotal + surge;
      setFare({ base, distance, time, distanceFare, timeFare, tolls, platformFee, surgeRate, surge, total });
    }
  }, [pickup, drop, vehicle]);
  return fare;
}
