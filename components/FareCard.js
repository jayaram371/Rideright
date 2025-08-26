import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function FareCard({ fare, onConfirm, vehicle }) {
  if (!fare) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🚖 RideRight Fare Estimate</Text>
      <Text style={styles.subTitle}>Vehicle: {vehicle}</Text>
      <View style={styles.line} />

      <Text>Base Fare: ₹{fare.base}</Text>
      <Text>Distance ({fare.distance} km): ₹{fare.distanceFare}</Text>
      <Text>Time ({fare.time} min): ₹{fare.timeFare}</Text>
      <Text>Tolls: ₹{fare.tolls}</Text>
      <Text>Platform Fee: ₹{fare.platformFee}</Text>
      <Text>Surge ({fare.surgeRate * 100}%): ₹{fare.surge}</Text>

      <View style={styles.line} />
      <Text style={styles.total}>Total (Locked): ₹{fare.total}</Text>

      <TouchableOpacity style={styles.button} onPress={onConfirm}>
        <Text style={styles.buttonText}>Confirm Ride</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginTop: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  subTitle: { fontSize: 14, marginBottom: 5, color: "#555" },
  total: { marginTop: 10, fontWeight: "bold", fontSize: 16, color: "#007bff" },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 8,
  },
  button: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
