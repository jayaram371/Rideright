import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import FareCard from "../components/FareCard";
import useFetchFare from "../hooks/useFetchFare";
import { useRideContext } from "../context/RideContext";

export default function RideScreen() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("Car");
  const [showFare, setShowFare] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const fare = useFetchFare(pickup, drop, vehicle);
  const { addRide } = useRideContext();

  // Handle fare estimate
  const handleGetFare = () => {
    if (!pickup || !drop) {
      setSuccessMessage("⚠️ Please enter both pickup and drop locations.");
      setTimeout(() => setSuccessMessage(""), 3000);
      return;
    }
    setShowFare(true);
  };

  // Handle ride confirmation
  const handleConfirmRide = () => {
    if (!fare) return;

    // Store ride in history
    addRide({ pickup, drop, vehicle, fare: `₹${fare.total}` });

    // Show success message on screen
    setSuccessMessage(
      `✅ Ride Confirmed!\nVehicle: ${vehicle}\nDriver: Hyundai Accent KA01-1234\nETA: 5 mins`
    );

    // Reset form after 3 seconds
    setTimeout(() => {
      setShowFare(false);
      setPickup("");
      setDrop("");
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {successMessage ? (
        <View style={styles.successBox}>
          <Text style={styles.successText}>{successMessage}</Text>
        </View>
      ) : null}

      <TextInput
        placeholder="Enter Pickup Location"
        value={pickup}
        onChangeText={setPickup}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter Drop Location"
        value={drop}
        onChangeText={setDrop}
        style={styles.input}
      />

      <Text style={styles.label}>Select Vehicle:</Text>
      <View style={styles.vehicleRow}>
        {[
          { id: "Car", img: require("../assets/car.png") },
          { id: "Auto", img: require("../assets/auto.png") },
          { id: "Bike", img: require("../assets/bike.png") },
        ].map((v) => (
          <TouchableOpacity
            key={v.id}
            style={[styles.vehicleBtn, vehicle === v.id && styles.selected]}
            onPress={() => setVehicle(v.id)}
          >
            <Image source={v.img} style={styles.vehicleIcon} />
            <Text
              style={[styles.vehicleText, vehicle === v.id && { color: "#fff" }]}
            >
              {v.id}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Get Fare Estimate" onPress={handleGetFare} />

      {showFare && fare && (
        <FareCard fare={fare} onConfirm={handleConfirmRide} vehicle={vehicle} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f4f4" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  label: { marginTop: 10, marginBottom: 5, fontWeight: "bold" },
  vehicleRow: { flexDirection: "row", marginBottom: 10 },
  vehicleBtn: {
    alignItems: "center",
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  selected: { backgroundColor: "#007bff", borderColor: "#007bff" },
  vehicleIcon: { width: 40, height: 40, marginBottom: 5, resizeMode: "contain" },
  vehicleText: { color: "#000", fontSize: 14, fontWeight: "600" },
  successBox: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#d4edda",
    borderRadius: 8,
  },
  successText: { color: "#155724", fontWeight: "600" },
});
