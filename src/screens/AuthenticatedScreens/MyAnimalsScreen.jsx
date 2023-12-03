import React, { useState, useEffect } from "react";
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Animal from "../../components/MyAnimalsComponents/Animal";
import { COLOR_MAIN_BG } from "../../constants/colors";
import { animalData } from "../../constants/testData";
import SkeletonView from "../../components/MyAnimalsComponents/SkeletonView";
import EditAnimal from "../../components/MyAnimalsComponents/EditAnimal";

const MyAnimalsScreen = () => {
	const { container } = styles;

	// * only for test purposes, it will be set by fetch hook in future
	// * the TouchableWithoutFeedback, has been added only for test purposes too
	const [isLoading, setIsLoading] = useState(true);

	const [editId, setEditId] = useState(); // id of an animal which will be edited, screen set visible by showEditComponent state
	const [showEditComponent, setShowEditComponent] = useState(false); // tells if edit component is shown instead of a list

	// will fetch in the future
	const handlePress = () => {
		setIsLoading(!isLoading);
	};

	useEffect(() => {
		console.log(editId);
	}, [editId]);

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
			) : !showEditComponent ? (
				<FlatList
					data={animalData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Animal	// const { isAuthenticated } = useContext(AuthContext);

							{...item}
							setEditId={setEditId}
							setShowEditComponent={setShowEditComponent}
						/>
					)}
				/>
			) : (
				<Animated.View exiting={FadeOut} entering={FadeIn}>
					<EditAnimal
						id={editId}
						setShowEditComponent={setShowEditComponent}
					/>
				</Animated.View>
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
