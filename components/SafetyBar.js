import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function SafetyBar() {
  return (
    <View style={styles.bar}>
      <Button title="🚨 SOS" onPress={() => alert("SOS Triggered!")} />
      <Button title="Share Ride" onPress={() => alert("Ride Shared!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: "row", justifyContent: "space-around", padding: 10, backgroundColor: "#eee" },
});
