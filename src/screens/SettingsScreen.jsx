import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import SettingRecord from "../components/Settings/SettingRecord";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  LightSpeedInRight,
  BounceInDown,
  StretchInY,
  StretchInX,
  ZoomInDown,
  ZoomInUp,
} from "react-native-reanimated";
import {
  COLOR_MAIN_BG,
  COLOR_PRIMARY,
  COLOR_SECONDARY_TEXT,
  COLOR_SEPARATORS,
  COLOR_TERTIARY_TEXT,
} from "../constants/colors";
import MainButton from "../components/MainComponents/MainButton";

const SettingsScreen = () => {
  const writeOutSomething = () => {
    console.log("Guzik wcisniety");
  };
  const settingsArray = [
    {
      title: "Allow localization",
      text: "Allows us to sell your soul",
      icon: "map-pin",
      som: true,
    },
    {
      title: "Allow localization",
      text: "Allows us to sell your soul",
      icon: "map-pin",
      som: true,
    },
    {
      title: "Allow everything",
      text: "Allows us to fuck u rmom",
      icon: "map-pin",
      som: false,
    },
    {
      title: "Allow everything",
      text: "Allows us to fuck u rmom",
      icon: "map-pin",
      som: true,
    },
    {
      title: "Remove my data",
      text: "Your data won't be removed :D",
      icon: "trash",
      iconSize: 32,
      som: true,
    },
    {
      title: "Remove my data",
      text: "Your data won't be removed :D",
      icon: "trash",
      iconSize: 32,
      som: false,
      argFunction: () => writeOutSomething(),
    },
    {
      title: "Remove my data",
      text: "Your data won't be removed :D",
      icon: "trash",
      iconSize: 32,
      som: false,
      argFunction: () => writeOutSomething(),
    },
  ];

  // settingsArray.map((rec)=>{console.log(rec.icon)})
  return (
    <Animated.View entering={ZoomInUp}>
      {settingsArray.map((rec, index) => (
        <SettingRecord
          title={rec.title}
          text={rec.text}
          icon={rec.icon}
          som={rec.som}
          index={index}
          iconSize={rec.iconSize}
          argFunction={rec.argFunction}
          color={index % 2 == 0 ? COLOR_MAIN_BG : "rgba(0,0,0,0.1)"}
        />
      ))}

      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <MainButton width={350} fontSize={22} height={70} />
      </View>
    </Animated.View>
  );
};
export default SettingsScreen;
