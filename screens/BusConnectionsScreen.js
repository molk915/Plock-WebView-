import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function BusConnectionsScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: "https://www.rozkladzik.pl/plock/" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
