import React from "react";
import { View, Text, Button } from "react-native";

const AnimalMenu = ({ animal, setShowMap, showMap }) => {
	return (
		<View>
			<Text>AnimalMenu</Text>
			<Button title="go back" onPress={() => setShowMap(!showMap)} />
		</View>
	);
};
export default AnimalMenu;
