import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Separator from "../Separator";
import {
	COLOR_MAIN_TEXT,
	COLOR_SECONDARY_TEXT,
	COLOR_TERTIARY_TEXT,
} from "../../constants/colors";
import { MAX_BREED_LENGTH } from "../../constants/values";

const Animal = ({ id, name, type, breed, info, imgPath }) => {
	const { image, nameStyle, idStyle, breedStyle, infoStyle, wrapper } =
		styles;

	return (
		<View>
			<View style={wrapper}>
				<View>
					<Image
						source={require("./../../../assets/dogImage.png")}
						style={image}
						alt={imgPath} // for tests
					/>
				</View>
				<View>
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
			</View>
			<Separator />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		padding: 10,
		gap: 5,
	},
	image: {
		width: 150,
		height: 150,
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
	},
});

export default Animal;
