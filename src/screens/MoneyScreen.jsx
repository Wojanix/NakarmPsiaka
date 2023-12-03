import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { COLOR_PRIMARY } from "../constants/colors";

export default function MoneyScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="dollar" size={20} color={COLOR_PRIMARY} />
      <Text style={{ textAlign: "center" }}> Coming Soon </Text>
      <FontAwesome name="dollar" size={20} color={COLOR_PRIMARY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
});
