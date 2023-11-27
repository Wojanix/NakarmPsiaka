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
import { COLOR_PRIMARY } from "../../constants/colors";
import { transform } from "typescript";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <MainButton
        style={styles.button}
        icon={
          <MaterialCommunityIcons name="dog" size={30} color={COLOR_PRIMARY} />
        }
        width={50}
        height={50}
        borderRadius={1000}
        padding={5}
        onPress={() => navigation.navigate(SCREEN_MY_ANIMALS)}
        title="My Animals"
        color={"white"}
      />
      <View style={styles.middleButtons}>
        <MainButton
          style={styles.button}
          width={50}
          height={50}
          borderRadius={1000}
          padding={5}
          onPress={() => navigation.navigate(SCREEN_SETTINGS)}
          title="Settings Screen"
          color="white"
          icon={<AntDesign name="setting" size={30} color={COLOR_PRIMARY} />}
        />
        <MainButton
          style={styles.button}
          onPress={() => navigation.navigate(SCREEN_ABOUT_US)}
          title="About us"
          width={60}
          height={60}
          borderRadius={1000}
          padding={5}
          icon={<AntDesign name="team" size={40} color="white" />}
        />
        <MainButton
          style={styles.buttonLeft}
          icon={
            <MaterialCommunityIcons
              name="dog"
              size={30}
              color={COLOR_PRIMARY}
            />
          }
          width={50}
          height={50}
          borderRadius={1000}
          padding={5}
          color="white"
          onPress={() => navigation.navigate(SCREEN_MY_ANIMALS)}
          title="My Animals"
        />
      </View>

      <MainButton
        style={styles.button}
        icon={
          <MaterialCommunityIcons name="dog" size={30} color={COLOR_PRIMARY} />
        }
        width={50}
        height={50}
        borderRadius={1000}
        padding={5}
        onPress={() => navigation.navigate(SCREEN_MY_ANIMALS)}
        title="My Animals"
        color={"white"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "90%",
    height: 70,
    padding: 5,
    marginBottom: "13%",
    marginHorizontal: "5%",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
    alignItems: "center",
  },
  button: {},
  middleButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonMid: {
    zIndex: 10000,
  },
  buttonLeft: {
    transforms: {
      transform: [{ translateX: 500 }],
    },
  },
});
