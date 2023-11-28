import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  Image,
} from "react-native";

import {
  SCREEN_ABOUT_US,
  SCREEN_MY_ANIMALS,
  SCREEN_SETTINGS,
} from "../constants/strings";
import { FontAwesome } from "@expo/vector-icons";
import MainButton from "../components/MainComponents/MainButton";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // info button
import { AntDesign } from "@expo/vector-icons";
import { COLOR_PRIMARY } from "../constants/colors";
import { transform } from "typescript";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission == false) {
    return <Text>Fuck no permissi0n</Text>;
  }
  let zmienna = true;
  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.camera} />
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View
            style={{
              position: "absolute",
              bottom: 20,
              alignItems: "center",
              width: "100%",
            }}
          >
            <MainButton
              text="Take photo"
              onPress={() => {
                takePicture();
              }}
            />
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
