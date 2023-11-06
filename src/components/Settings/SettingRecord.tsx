import { View, Text, StyleSheet, Switch, Pressable } from "react-native";
import React, { useState } from "react";
import {
  COLOR_MAIN_BG,
  COLOR_MAIN_TEXT,
  COLOR_PRIMARY,
  COLOR_SECONDARY_TEXT,
} from "../../constants/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons"; // info button
import { MaterialIcons } from "@expo/vector-icons"; // edit button
import { FontAwesome } from "@expo/vector-icons"; // remove button

export default function SettingRecord(props) {
  const { text, title, icon, som, index, iconSize, argFunction, color } = props;
  argFunction ? argFunction() : "";

  console.log(argFunction);

  const [isEnabled, setIsEnabled] = useState(som);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => (argFunction ? argFunction() : "")}
      android_ripple={{
        color: argFunction ? COLOR_SECONDARY_TEXT : color,
        borderless: false,
      }}
    >
      <Text style={styles.icon}>
        <FontAwesome
          name={icon}
          size={iconSize ? iconSize : 38}
          color={"black"}
        />
      </Text>
      <View style={styles.text}>
        <Text style={styles.textTop}>{title}</Text>
        <Text style={styles.textBottom}>{text}</Text>
      </View>

      {som ? (
        <Switch
          style={styles.som}
          trackColor={{ false: "#767577", true: COLOR_SECONDARY_TEXT }}
          thumbColor={isEnabled ? COLOR_PRIMARY : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        ""
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderColor: "black",
    borderTopWidth: 0,
    padding: 15,
  },
  icon: {
    width: "12%",
  },
  text: {
    width: "62%",
  },
  textTop: {
    fontSize: 20,
    color: COLOR_MAIN_TEXT,
  },
  textBottom: {
    fontSize: 14,
    color: COLOR_SECONDARY_TEXT,
  },
  som: {
    width: "20%",
    transform: [{ scale: 1.3 }],
  },
});
