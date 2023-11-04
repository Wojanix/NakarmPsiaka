import React from "react";
import { View, StyleSheet } from "react-native";
import { COLOR_SEPARATORS } from "../constants/colors";

const Separator = () => {
	return (
		<View
			style={{
				borderBottomColor: COLOR_SEPARATORS,
				borderBottomWidth: StyleSheet.hairlineWidth,
				width: "100%",
				alignSelf: "center",
			}}
		/>
	);
};
export default Separator;
