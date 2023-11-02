import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Separator from "../Separator";
import {
	COLOR_MAIN_TEXT,
	COLOR_SECONDARY_TEXT,
	COLOR_TERTIARY_TEXT,
} from "../../constants/colors";
import { MAX_BREED_LENGTH } from "../../constants/values";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Animal = ({ id, name, type, breed, info, imgPath }) => {
	const {
		image,
		nameStyle,
		idStyle,
		breedStyle,
		infoStyle,
		wrapper,
		firstWrapper,
		secondWrapper,
	} = styles;

	return (
		<View>
			<View style={wrapper}>
				<View style={firstWrapper}>
					<Image
						source={require("./../../../assets/dogImage.png")}
						style={image}
						alt={imgPath} // for tests
					/>
				</View>
				<View style={secondWrapper}>
					<Text style={nameStyle}>{name}</Text>
					<Text style={idStyle}>#id:{id}</Text>

					{breed.length <= MAX_BREED_LENGTH ? (
						<View>
							<Text style={breedStyle}>
								{type}, {breed}
							</Text>
						</View>
					) : (
						<View>
							<Text style={breedStyle}>{type},</Text>
							<Text style={breedStyle}>{breed}</Text>
						</View>
					)}

					<Text style={infoStyle}>{info}</Text>
				</View>
				<InfoButton />
			</View>
			<Separator />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		margin: 10,
		justifyContent: "space-between",
		width: "100%",
	},
	firstWrapper: {
		width: "35%",
		aspectRatio: "1/1",
	},
	secondWrapper: {
		width: "45%",
	},
	thirdWrapper: {
		width: "1",
	},
	image: {
		width: "100%",
		height: "100%",
		borderRadius: 16,
	},
	nameStyle: {
		fontSize: 30,
		fontWeight: "300",
		color: COLOR_MAIN_TEXT,
	},
	idStyle: {
		color: COLOR_TERTIARY_TEXT,
		fontSize: 12,
		marginTop: -6,
	},
	breedStyle: {
		fontSize: 20,
		color: COLOR_SECONDARY_TEXT,
		fontWeight: "300",
		flexWrap: "wrap",
	},
	infoStyle: {
		fontSize: 14,
		color: COLOR_SECONDARY_TEXT,
		fontWeight: "300",
		width: 210,
	},
});

const InfoButton = () => {
	const { thirdWrapper } = styles;

	return (
		<View style={thirdWrapper}>
			<TouchableOpacity
				style={{
					marginTop: -10,
					marginRight: 20,
					padding: 15,
				}}>
				<MaterialCommunityIcons
					name="dots-vertical"
					size={24}
					color="black"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Animal;
