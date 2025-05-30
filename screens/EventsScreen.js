import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://kalendarzimprez.plock.eu/?utm_source=chatgpt.com",
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
