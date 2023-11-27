import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLOR_BUTTON_TEXT_MAIN, COLOR_PRIMARY } from "../../constants/colors";

const EditAnimalButton = ({ text, handlePress, additionalStyles }) => {
	const { button, buttonText } = styles;

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[button, additionalStyles]}
			onPress={() => handlePress()}>
			<Text style={buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

// todo: change the styles of the button
const styles = StyleSheet.create({
	button: {
		borderRadius: 20,
		flexDirection: "row",
		height: 40,
		width: 100,
		backgroundColor: COLOR_PRIMARY,
		alignItems: "center",
		justifyContent: "center",
		elevation: 3,
	},
	buttonText: { color: COLOR_BUTTON_TEXT_MAIN, textTransform: "uppercase" },
});

export default EditAnimalButton;
