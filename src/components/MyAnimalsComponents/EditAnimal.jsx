import React from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	ScrollView,
} from "react-native";
import Separator from "../Separator";
import EditAnimalButton from "./EditAnimalButton";
import {
	COLOR_SECONDARY_TEXT,
	COLOR_TERTIARY_TEXT,
} from "../../constants/colors";

const EditAnimal = ({ id, setShowEditComponent }) => {
	return (
		<ScrollView>
			<View>
				<Image
					source={require("./../../../assets/dogImage.png")}
					style={styles.image}
				/>
			</View>

			<View style={styles.editWrapper}>
				<View style={styles.header}>
					<Text style={{ color: COLOR_TERTIARY_TEXT }}>#{id}</Text>
				</View>

				<View style={styles.inputWrapper}>
					<Text style={styles.text}>Name:</Text>
					<TextInput
						style={styles.input}
						placeholder="Name of the animal"
					/>
					<Separator />
				</View>

				<View style={styles.inputWrapper}>
					<Text style={styles.text}>Type:</Text>
					<TextInput
						style={styles.input}
						placeholder="Type of animal"
					/>
					<Separator />
				</View>

				<View style={styles.inputWrapper}>
					<Text style={styles.text}>Breed:</Text>
					<TextInput
						style={styles.input}
						placeholder="Breed of animal"
					/>
					<Separator />
				</View>

				<View style={styles.inputWrapper}>
					<Text style={styles.text}>Info:</Text>
					<TextInput
						style={styles.input}
						placeholder="Info about the animal"
						multiline={true}
					/>
					<Separator />
				</View>
			</View>

			<View style={styles.buttonWrapper}>
				<EditAnimalButton text={"Change"} />
				<EditAnimalButton
					text={"Cancel"}
					handlePress={() => setShowEditComponent(false)}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 350,
	},
	header: {
		paddingTop: 5,
		paddingBottom: 20,
	},
	editWrapper: {
		width: "100%",
		paddingHorizontal: 20,
		alignSelf: "center",
	},
	inputWrapper: { paddingVertical: 5 },
	input: {
		width: "100%",
		fontSize: 20,
	},
	text: {
		fontSize: 25,
	},
	buttonWrapper: {
		marginTop: 20,
		gap: 30,
		flexDirection: "row",
		justifyContent: "center",
	},
});

export default EditAnimal;
