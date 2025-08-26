import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function VehicleCard() {
  const [selected, setSelected] = useState(null);

  const vehicles = [
    { id: "car", type: "Car", image: require("../assets/car.png") },
    { id: "auto", type: "Auto", image: require("../assets/auto.png") },
    { id: "bike", type: "Bike", image: require("../assets/bike.png") },
  ];

  return (
    <View style={styles.container}>
      {vehicles.map((v) => (
        <TouchableOpacity
          key={v.id}
          onPress={() => setSelected(v.id)}
          style={[styles.card, selected === v.id && styles.selected]}
        >
          <Image source={v.image} style={styles.icon} />
          <Text style={styles.text}>{v.type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  card: {
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
    backgroundColor: "#fff",
  },
  selected: {
    borderColor: "#007bff",
    backgroundColor: "#e6f0ff",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: "contain",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
});
