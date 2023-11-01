import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import Animal from "../components/MyAnimalsComponents/Animal";
import { COLOR_MAIN_BG } from "../constants/colors";
import { animalData } from "../constants/testData";
import SkeletonView from "../components/MyAnimalsComponents/SkeletonView";

const MyAnimalsScreen = () => {
	const { container } = styles;

	// * only for test purposes, it will be set by fetch hook in future
	// * the TouchableWithoutFeedback, has been added only for test purposes too
	const [isLoading, setIsLoading] = useState(true);

	return (
		<SafeAreaView style={container}>
			{isLoading ? (
				<TouchableWithoutFeedback
					onPress={() => setIsLoading(!isLoading)}>
					<View>
						<SkeletonView />
						<SkeletonView />
						<SkeletonView />
						<SkeletonView />
					</View>
				</TouchableWithoutFeedback>
			) : (
				<FlatList
					data={animalData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <Animal {...item} />}
				/>
			)}
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
