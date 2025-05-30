import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function CityTour() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://nowy.plock.eu/turysta/co-warto-zobaczyc/",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
