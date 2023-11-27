import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import {
  SCREEN_ABOUT_US,
  SCREEN_MY_ANIMALS,
  SCREEN_SETTINGS,
} from "../constants/strings";
import MapView from "react-native-maps";
import Menu from "../components/MapComponents/Menu";

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>MapScreen</Text>

      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 52.225711,
          longitude: 21.00882,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomControlEnabled={true}
      />
      <Menu navigation={navigation} />
    </SafeAreaView>
  );
};
export default MapScreen;
