import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Text } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Witamy w aplikacji GoPłock!</Text>
      <Text style={styles.subtitle}>
        Odkryj najważniejsze informacje o Płocku, sprawdź mapę miasta i
        połączenia autobusowe.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Zobacz Mapę Płocka"
          onPress={() => navigation.navigate("PlockMap")}
          color="#1976D2"
        />
        <Button
          title="Połączenia autobusowe"
          onPress={() => navigation.navigate("BusConnections")}
          color="#388E3C"
        />
        <Button
          title="Wydarzenia w Płocku"
          onPress={() => navigation.navigate("Events")}
          color="#D32F2F"
        />
        <Button
          title="CityTour"
          onPress={() => navigation.navigate("CityTour")}
          color="#8e24aa"
        />
        <Button
          title="Ustawienia"
          onPress={() => navigation.navigate("Settings")}
          color="#FBC02D"
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          🏙️ GoPłock to Twój przewodnik po mieście! Znajdziesz tu mapy, rozkłady
          jazdy i wiele więcej.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.author}>autor: Piotr Koch</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 32,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
    marginBottom: 32,
  },
  infoBox: {
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    color: "#1976D2",
    fontSize: 15,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  author: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
  },
});
