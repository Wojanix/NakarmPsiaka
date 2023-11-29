import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  Image,
  ImageBackground,
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
import { Entypo } from "@expo/vector-icons";

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

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture Saved");
        setImage(null);
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
        <ImageBackground source={{ uri: image }} style={styles.container}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              alignItems: "center",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              flex: 1,
            }}
          >
            <MainButton
              borderRadius={0}
              icon={<AntDesign name="check" size={20} color="white" />}
              fontSize={18}
              ifHalf={true}
              height={60}
              color="rgba(0,0,0,0.8)"
              text="  Retake photo"
              padding={8}
              onPress={() => {
                setImage(null);
              }}
            />
            <MainButton
              borderRadius={0}
              icon={<AntDesign name="retweet" size={20} color="white" />}
              fontSize={18}
              ifHalf={true}
              height={60}
              color="rgba(0,0,0,0.8)"
              text="  Save photo"
              padding={8}
              onPress={() => {
                saveImage();
              }}
            />
          </View>
        </ImageBackground>
      ) : (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            flashMode={flash}
            ref={cameraRef}
          ></Camera>
          <View
            style={{
              position: "absolute",
              top: 0,
              alignItems: "center",
              width: "100%",
              padding: 14,
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MainButton
              icon={<AntDesign name="retweet" size={32} color="white" />}
              color="rgba(0,0,0,0)"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <MainButton
              icon={
                <Entypo
                  name="flash"
                  size={32}
                  color={
                    flash === Camera.Constants.FlashMode.off ? "white" : "grey"
                  }
                />
              }
              color="rgba(0,0,0,0)"
              onPress={() => {
                console.log("sd");
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            />
          </View>

          <View
            style={{
              position: "absolute",
              bottom: 0,
              alignItems: "center",
              width: "100%",
            }}
          >
            <MainButton
              icon={<AntDesign name="camera" size={24} color="white" />}
              fontSize={22}
              width={1000}
              height={80}
              color="rgba(0,0,0,0.8)"
              text="  Take photo"
              padding={8}
              onPress={() => {
                takePicture();
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  camera: {
    // flex: 1,
    width: "120%",
    height: "100%",
    position: "absolute",
  },
});
