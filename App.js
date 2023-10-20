import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tralalalalal wojtek Branch</Text>
      <View>
        <Text>HEHEHEHA</Text>
      </View>
      <StatusBar style="auto" />

      <View>
        This is rudy's branch, we love dogs and we are certainly not racist
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
