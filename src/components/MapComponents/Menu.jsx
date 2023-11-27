import React from "react";
import { SafeAreaView, Text, Button, StyleSheet, View } from "react-native";

import {
  SCREEN_ABOUT_US,
  SCREEN_MY_ANIMALS,
  SCREEN_SETTINGS,
} from "../../constants/strings";
import MainButton from "../MainComponents/MainButton";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // info button
import { AntDesign } from "@expo/vector-icons";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <MainButton
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN_SETTINGS)}
        title="Settings Screen"
        icon={<AntDesign name="setting" size={30} color="white" />}
      />
      <MainButton
        style={styles.button}
        onPress={() => navigation.navigate(SCREEN_ABOUT_US)}
        title="About us"
        icon={<AntDesign name="team" size={30} color="white" />}
      />
      <MainButton
        style={styles.button}
        icon={<MaterialCommunityIcons name="dog" size={30} color="white" />}
        onPress={() => navigation.navigate(SCREEN_MY_ANIMALS)}
        title="My Animals"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "90%",
    height: 70,
    padding: 10,
    marginBottom: "15%",
    marginHorizontal: "5%",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
  button: {},
});
