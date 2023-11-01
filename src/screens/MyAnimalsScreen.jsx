import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Animal from "../components/MyAnimalsComponents/Animal";
import { COLOR_MAIN_BG } from "../constants/colors";
import { animalData } from "../constants/testData";

const MyAnimalsScreen = () => {
	const { container } = styles;

	return (
		<SafeAreaView style={container}>
			<FlatList
				data={animalData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Animal {...item} />}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		alignItems: "center",
		backgroundColor: COLOR_MAIN_BG,
	},
});

export default MyAnimalsScreen;
