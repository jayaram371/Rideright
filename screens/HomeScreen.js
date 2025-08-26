import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Welcome to RideRight</Text>
      <Button title="Book a Ride" onPress={() => navigation.navigate("Ride")} />
      <Button title="Ride History" onPress={() => navigation.navigate("History")} />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});
