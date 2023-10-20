import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tralalalalal wojtek Branch1234567</Text>
      <View>
        <Text>HEHEHEHA</Text>
      </View>
      <StatusBar style="auto" />

      <MapView
        style={styles.map}
        region={{
          latitude: 52.226918,
          longitude: 21.00824,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          title="Menel"
          description="Menel heh"
          coordinate={{
            latitude: 52.176047,

            longitude: 21.064444,
          }}
          centerOffset={{ x: -18, y: -60 }}
          anchor={{ x: 0.69, y: 1 }}
        ></Marker>
      </MapView>
      <View>
        <Text>
          This is rudy's branch, we love dogs and we are certainly not racist
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100vh",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
