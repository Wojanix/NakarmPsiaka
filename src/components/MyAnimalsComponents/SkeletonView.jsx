import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Skeleton from "./Skeleton";
import { COLOR_SKELETON_BG } from "../../constants/colors";

const SkeletonView = () => {
	const cardWidth = Dimensions.get("window").width - 25;
	const { card } = styles;

	return (
		<View style={[card, { width: cardWidth }]}>
			<Skeleton height={150} width={150} style={{ borderRadius: 16 }} />
			<View>
				<Skeleton
					height={35}
					width={120}
					style={{ borderRadius: 8, marginTop: 1 }}
				/>
				<Skeleton
					height={10}
					width={40}
					style={{ borderRadius: 4, marginTop: 5 }}
				/>
				<Skeleton
					height={25}
					width={160}
					style={{ borderRadius: 8, marginTop: 10 }}
				/>
				<Skeleton
					height={52}
					width={190}
					style={{ borderRadius: 8, marginTop: 10 }}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: COLOR_SKELETON_BG,
		padding: 16,
		elevation: 3,
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.24,
		shadowRadius: 4,
		borderRadius: 8,
		flexDirection: "row",
		gap: 20,
		marginVertical: 10,
	},
});
export default SkeletonView;
