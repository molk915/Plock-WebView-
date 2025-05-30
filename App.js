import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EventsScreen from "./screens/EventsScreen";
import HomeScreen from "./screens/homeScreen";
import PlockMap from "./screens/plockMap";
import BusConnectionsScreen from "./screens/BusConnectionsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import CityTour from "./screens/CityTour";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlockMap" component={PlockMap} />
        <Stack.Screen name="BusConnections" component={BusConnectionsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="CityTour" component={CityTour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
