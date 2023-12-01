import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./src/screens/MapScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";
import MyAnimalsScreen from "./src/screens/MyAnimalsScreen";
import CameraScreen from "./src/screens/CameraScreen";
import {
	SCREEN_SETTINGS,
	SCREEN_MAP,
	SCREEN_ABOUT_US,
	SCREEN_MY_ANIMALS,
	SCREEN_CAMERA,
	SCREEN_LOGIN,
	SCREEN_REGISTER,
} from "./src/constants/strings";
import LoginScreen from "./src/screens/LoginScreens/LoginScreen";
import RegisterScreen from "./src/screens/LoginScreens/RegisterScreen";

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
				<Stack.Screen
					name={SCREEN_CAMERA}
					component={CameraScreen}
					options={{ title: "Camera", headerShown: false }}
				/>
				{/* ! only for now, it doesn't meet security requirements, in the future it will be a separate navigation for non-authenticated users */}
				<Stack.Screen
					name={SCREEN_LOGIN}
					component={LoginScreen}
					options={{ title: "Login", headerShown: false }}
				/>
				<Stack.Screen
					name={SCREEN_REGISTER}
					component={RegisterScreen}
					options={{ title: "Register", headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
