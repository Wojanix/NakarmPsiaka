import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { COLOR_MAIN_BG } from "../../constants/colors";

const AnimalMenu = ({ animal, setShowAnimalModal, showAnimalModal }) => {
	const { id, type, name, breed, info } = animal;

	return (
		<View style={styles.container}>
			<Text>{id}</Text>
			<Text>{name}</Text>
			<Text>{type}</Text>
			<Text>{breed}</Text>
			<Text>{info}</Text>
			<Button title="nakarm" />
			<Button
				title="wróć"
				onPress={() => setShowAnimalModal(!showAnimalModal)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR_MAIN_BG,
	},
});

export default AnimalMenu;
