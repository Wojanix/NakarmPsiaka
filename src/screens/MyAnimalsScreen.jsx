import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import Animal from "../components/MyAnimalsComponents/Animal";
import { COLOR_MAIN_BG } from "../constants/colors";
import { animalData } from "../constants/testData";
import SkeletonView from "../components/MyAnimalsComponents/SkeletonView";

// navigation here is used to open edit animal screen in modal inside animal component
// ? if there is a way to streamline this navigation it should be changed later
const MyAnimalsScreen = ({ navigation }) => {
	const { container } = styles;

	// * only for test purposes, it will be set by fetch hook in future
	// * the TouchableWithoutFeedback, has been added only for test purposes too
	const [isLoading, setIsLoading] = useState(true);

	// will fetch in the future
	const handlePress = () => {
		setIsLoading(!isLoading);
	};

	return (
		<SafeAreaView style={container}>
			{isLoading ? (
				<TouchableWithoutFeedback onPress={() => handlePress()}>
					<Animated.View exiting={FadeOut}>
						<SkeletonView />
						<SkeletonView />
						<SkeletonView />
						<SkeletonView />
					</Animated.View>
				</TouchableWithoutFeedback>
			) : (
				<FlatList
					data={animalData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Animal {...item} navigation={navigation} />
					)}
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
