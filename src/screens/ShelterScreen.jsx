import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ShelterScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>ShelterScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
