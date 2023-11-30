import React, { useState } from "react";
import { SafeAreaView, Modal, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Menu from "../components/MapComponents/Menu";
import { animalData } from "../constants/testData";
import AnimalMenu from "../components/MapComponents/AnimalMenu";
import MainButton from "../components/MainComponents/MainButton";
import { SCREEN_LOGIN } from "../constants/strings";

const MapScreen = ({ navigation }) => {
	const [showAnimalModal, setShowAnimalModal] = useState(false); // state of modal with animal info
	const [shownAnimal, setShownAnimal] = useState({}); // data of animal which will be shown

	const handleMarkerPress = (animal) => {
		setShownAnimal(animal);
		setShowAnimalModal(!showAnimalModal);
	};

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
				{animalData.map((animal) => (
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

			{/* ! TEST BUTTONS, marked for removal */}
			<View style={{ position: "absolute", top: 20 }}>
				<Button
					title="login"
					onPress={() => navigation.navigate(SCREEN_LOGIN)}
				/>
			</View>
		</SafeAreaView>
	);
};
export default MapScreen;
