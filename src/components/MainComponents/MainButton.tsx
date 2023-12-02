import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLOR_PRIMARY } from "../../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // info button
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const MainButton = ({
  text = "",
  color = COLOR_PRIMARY,
  fontSize = 16,
  width = 100,
  ifHalf = false,
  height = 50,
  onPress = null,
  icon = null,
  borderRadius = 20,
  padding = 0,
  styleArg,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styleArg,
        { backgroundColor: color, width, height, borderRadius, padding },
        { width: ifHalf ? "50%" : width },
      ]}
    >
      <View style={[styles.button, { width: "100%", height: "100%" }]}>
        <Text
          style={[
            styles.buttonText,
            {
              fontSize,
              lineHeight: height - 2 * padding,
              color: "white",
            },
          ]}
        >
          {icon}
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default MainButton;
