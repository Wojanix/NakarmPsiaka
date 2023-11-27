import React, { useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import {
	SCREEN_ABOUT_US,
	SCREEN_MY_ANIMALS,
	SCREEN_SETTINGS,
} from "../constants/strings";
import MapView, { Marker } from "react-native-maps";
import Menu from "../components/MapComponents/Menu";
import { animalData } from "../constants/testData";
import AnimalMenu from "../components/MapComponents/AnimalMenu";

const MapScreen = ({ navigation }) => {
	const [showMap, setShowMap] = useState(true); // decides between showing a map and showing an animal screen
	const [shownAnimal, setShownAnimal] = useState({}); // data of animal which will be shown

	const handleMarkerPress = (animal) => {
		setShownAnimal(animal);
		setShowMap(!showMap);
	};

	return (
		<SafeAreaView>
			{showMap ? (
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
							onPress={(animal) => handleMarkerPress(animal)}
						/>
					))}
				</MapView>
			) : (
				<AnimalMenu
					animal={shownAnimal}
					setShowMap={setShowMap}
					showMap={showMap}
				/>
			)}

			<Menu navigation={navigation} />
		</SafeAreaView>
	);
};
export default MapScreen;
