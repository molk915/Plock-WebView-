import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Zobacz Mapę Płocka"
        onPress={() => navigation.navigate("PlockMap")}
      />
      <Button
        title="Połączenia autobusowe"
        onPress={() => navigation.navigate("BusConnections")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
});
