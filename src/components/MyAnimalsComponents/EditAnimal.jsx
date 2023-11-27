import React from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

const EditAnimal = ({ id }) => {
	return (
		<View>
			<View>
				<Text>{id}</Text>
			</View>
			<View>
				<Text>Name:</Text>
				<TextInput style={styles.input} />
				<Text>Type:</Text>
				<TextInput style={styles.input} />
				<Text>Breed:</Text>
				<TextInput style={styles.input} />
				<Text>Info:</Text>
				<TextInput style={styles.input} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
	},
});

export default EditAnimal;
