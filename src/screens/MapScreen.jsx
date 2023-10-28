import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import {
	SCREEN_ABOUT_US,
	SCREEN_MY_ANIMALS,
	SCREEN_SETTINGS,
} from "../constants/strings";

const MapScreen = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>MapScreen</Text>
			<Button
				onPress={() => navigation.navigate(SCREEN_SETTINGS)}
				title="Settings Screen"
			/>
			<Button
				onPress={() => navigation.navigate(SCREEN_ABOUT_US)}
				title="About us"
			/>
			<Button
				onPress={() => navigation.navigate(SCREEN_MY_ANIMALS)}
				title="My Animals"
			/>
		</SafeAreaView>
	);
};
export default MapScreen;
