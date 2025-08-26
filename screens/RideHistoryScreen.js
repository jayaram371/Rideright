import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRideContext } from "../context/RideContext";

export default function RideHistoryScreen() {
  const { rideHistory } = useRideContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Ride History</Text>
      {rideHistory.length === 0 ? (
        <Text>No rides yet!</Text>
      ) : (
        <FlatList
          data={rideHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>
              {item.pickup} ➝ {item.drop} | {item.vehicle} | {item.fare}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
