import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  // Example: Vibration setting
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  // Example: Auto-update setting
  const [autoUpdateEnabled, setAutoUpdateEnabled] = useState(false);
  // Example: Location access setting
  const [locationEnabled, setLocationEnabled] = useState(false);
  // Example: Font size setting
  const [fontSize, setFontSize] = useState("medium");
  // Example: Data saver setting
  const [dataSaverEnabled, setDataSaverEnabled] = useState(false);
  // Example: Sound setting
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  // Language state (example extra setting)
  const [language, setLanguage] = useState("pl");

  // Dynamic styles based on dark mode
  const dynamicStyles = {
    container: {
      ...styles.container,
      backgroundColor: darkMode ? "#181818" : "#f0f0f0",
    },
    title: {
      ...styles.title,
      color: darkMode ? "#fff" : "#000",
    },
    optionRow: {
      ...styles.optionRow,
      backgroundColor: darkMode ? "#232323" : "#fff",
    },
    label: {
      ...styles.label,
      color: darkMode ? "#fff" : "#000",
    },
  };

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>Ustawienia</Text>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Tryb ciemny</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Powiadomienia</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Dźwięk</Text>
        <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Wibracje</Text>
        <Switch value={vibrationEnabled} onValueChange={setVibrationEnabled} />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Automatyczna aktualizacja</Text>
        <Switch
          value={autoUpdateEnabled}
          onValueChange={setAutoUpdateEnabled}
        />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Dostęp do lokalizacji</Text>
        <Switch value={locationEnabled} onValueChange={setLocationEnabled} />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Oszczędzanie danych</Text>
        <Switch value={dataSaverEnabled} onValueChange={setDataSaverEnabled} />
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Rozmiar czcionki</Text>
        <Text
          style={[dynamicStyles.label, { textDecorationLine: "underline" }]}
          onPress={() => {
            const sizes = ["small", "medium", "large"];
            const nextIndex = (sizes.indexOf(fontSize) + 1) % sizes.length;
            setFontSize(sizes[nextIndex]);
          }}
        >
          {fontSize === "small"
            ? "Mała"
            : fontSize === "medium"
            ? "Średnia"
            : "Duża"}
        </Text>
      </View>

      <View style={dynamicStyles.optionRow}>
        <Text style={dynamicStyles.label}>Język</Text>
        <Text
          style={[dynamicStyles.label, { textDecorationLine: "underline" }]}
          onPress={() => setLanguage(language === "pl" ? "en" : "pl")}
        >
          {language === "pl" ? "Polski" : "English"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: "bold",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 18,
  },
});
