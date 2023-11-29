import React from "react";
import {
	View,
	Text,
	Button,
	StyleSheet,
	ScrollView,
	Image,
} from "react-native";
import {
	COLOR_MAIN_BG,
	COLOR_PRIMARY,
	COLOR_SECONDARY_TEXT,
	COLOR_TERTIARY_TEXT,
} from "../../constants/colors";
import MainButton from "../MainComponents/MainButton";
import { AntDesign } from "@expo/vector-icons";

const AnimalMenu = ({ animal, setShowAnimalModal, showAnimalModal }) => {
	const { id, type, name, breed, info } = animal;

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require("./../../../assets/dogImage.png")}
					style={styles.image}
				/>
			</View>
			<View style={styles.textWrapper}>
				<View style={styles.header}>
					<Text style={{ color: COLOR_TERTIARY_TEXT }}>#{id}</Text>
				</View>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.title}>{type}</Text>
				<Text style={styles.breed}>{breed}</Text>
				<ScrollView>
					<Text style={styles.info}>{info}</Text>
				</ScrollView>
			</View>
			<View style={styles.buttonWrapper}>
				<MainButton
					color={COLOR_PRIMARY}
					width={50}
					fontSize={20}
					height={60}
					onPress={() => setShowAnimalModal(!showAnimalModal)}
					icon={<AntDesign name="back" size={24} color="white" />}
				/>
				<MainButton
					color={COLOR_PRIMARY}
					width={250}
					fontSize={20}
					height={60}
					text="Nakarm"
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR_MAIN_BG,
		width: "100%",
		height: "100%",
	},
	textWrapper: {
		padding: 10,
	},
	image: {
		height: 350,
	},
	header: {
		paddingTop: 5,
	},
	name: {
		fontSize: 40,
		fontWeight: "300",
		color: COLOR_SECONDARY_TEXT,
	},
	title: {
		fontSize: 30,
		fontWeight: "300",
		color: COLOR_SECONDARY_TEXT,
	},
	breed: {
		fontSize: 30,
		fontWeight: "300",
		color: COLOR_SECONDARY_TEXT,
	},
	info: {
		fontSize: 20,
		color: COLOR_SECONDARY_TEXT,
	},
	buttonWrapper: {
		width: "100%",
		flexDirection: "row",
		gap: 20,
		justifyContent: "center",
		position: "absolute",
		bottom: 10,
	},
});

export default AnimalMenu;
