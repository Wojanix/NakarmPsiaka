import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./src/screens/MapScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";
import MyAnimalsScreen from "./src/screens/MyAnimalsScreen";
import {
	SCREEN_SETTINGS,
	SCREEN_MAP,
	SCREEN_ABOUT_US,
	SCREEN_MY_ANIMALS,
} from "./src/constants/strings";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={SCREEN_MAP}
				screenOptions={{ headerTitleAlign: "center" }}>
				<Stack.Screen
					name={SCREEN_MAP}
					component={MapScreen}
					options={{ title: "Map", headerShown: false }}
				/>
				<Stack.Screen
					name={SCREEN_SETTINGS}
					component={SettingsScreen}
					options={{ title: "Settings" }}
				/>
				<Stack.Screen
					name={SCREEN_ABOUT_US}
					component={AboutUsScreen}
					options={{ title: "About us" }}
				/>
				<Stack.Screen
					name={SCREEN_MY_ANIMALS}
					component={MyAnimalsScreen}
					options={{ title: "My animals" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
