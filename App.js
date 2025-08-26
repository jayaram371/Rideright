import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RideScreen from "./screens/RideScreen";
import RideHistoryScreen from "./screens/RideHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { RideProvider } from "./context/RideContext"; // ✅ New

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RideProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Ride" component={RideScreen} />
          <Stack.Screen name="History" component={RideHistoryScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RideProvider>
  );
}
