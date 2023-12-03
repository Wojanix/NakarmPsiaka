import React, { useState, useEffect } from "react";
import { SafeAreaView, Modal, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Menu from "../../components/MapComponents/Menu";
import { animalData } from "../../constants/testData";
import AnimalMenu from "../../components/MapComponents/AnimalMenu";
import * as Location from "expo-location";
import MainButton from "../../components/MainComponents/MainButton";
import { SCREEN_LOGIN } from "../../constants/strings";

const MapScreen = ({ route, navigation }) => {
	const { ifLocation = false, image = "" } = route.params || {};
	const [animalData2, setAnimalData2] = useState(animalData);
	const [showAnimalModal, setShowAnimalModal] = useState(false); // state of modal with animal info
	const [shownAnimal, setShownAnimal] = useState({}); // data of animal which will be shown

	const handleMarkerPress = (animal) => {
		setShownAnimal(animal);
		setShowAnimalModal(!showAnimalModal);
	};

	const userLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			Alert("Nie ma permisji do lokalizacji");
		}
		let location = await Location.getCurrentPositionAsync({
			enableHighAccuracy: true,
		});
		return location;
	};

	useEffect(() => {
		const addAnimalWithLocation = async () => {
			if (ifLocation) {
				try {
					let loc = await userLocation();
					console.log(loc, "current Loc");
					if (image) console.log(image, "current image");

					setAnimalData2((prevAnimalData) => [
						...prevAnimalData,
						{
							id: 11,
							longitude: loc.coords.longitude,
							latitude: loc.coords.latitude,
							name: "FUcker",
							type: "Shitter",
							breed: "Bitch",
							info: "Big ass Smach",
							imagePath: image,
						},
					]);
				} catch (error) {
					console.error("Error getting user location:", error);
				}
			}
		};

		addAnimalWithLocation();
	}, [ifLocation, image]);

	return (
		<SafeAreaView>
			<MapView
				style={{ width: "100%", height: "100%" }}
				initialRegion={{
					latitude: 52.225711,
					longitude: 21.00882,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				zoomControlEnabled={true}>
				{animalData2.map((animal) => (
					<Marker
						key={animal.id}
						coordinate={{
							latitude: animal.latitude,
							longitude: animal.longitude,
						}}
						// title={animal.type}
						// description={animal.breed}
						onPress={() => handleMarkerPress(animal)}
					/>
				))}
			</MapView>

			{/* its a modal, otherwise it triggers rerender of whole map, which has some performance benefits */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={showAnimalModal}
				onRequestClose={() => {
					setShowAnimalModal(!showAnimalModal);
				}}>
				<AnimalMenu
					animal={shownAnimal}
					setShowAnimalModal={setShowAnimalModal}
					showAnimalModal={showAnimalModal}
				/>
			</Modal>

			<Menu navigation={navigation} />
		</SafeAreaView>
	);
};
export default MapScreen;
