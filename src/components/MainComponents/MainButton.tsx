import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLOR_PRIMARY } from "../../constants/colors";

const MainButton = ({
  text = "Press me",
  color = COLOR_PRIMARY,
  fontSize = 16,
  width = 100,
  height = 50,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          { backgroundColor: COLOR_PRIMARY, width, height },
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            { fontSize, lineHeight: height, color: "white" },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default MainButton;
