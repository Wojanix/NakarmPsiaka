import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./AuthenticatedScreens/MapScreen";
import SettingsScreen from "./AuthenticatedScreens/SettingsScreen";
import AboutUsScreen from "./AuthenticatedScreens/AboutUsScreen";
import MyAnimalsScreen from "./AuthenticatedScreens/MyAnimalsScreen";
import {
	SCREEN_SETTINGS,
	SCREEN_MAP,
	SCREEN_ABOUT_US,
	SCREEN_MY_ANIMALS,
	SCREEN_CAMERA,
	SCREEN_LOGIN,
	SCREEN_REGISTER,
} from "../constants/strings";
import LoginScreen from "./LoginScreens/LoginScreen";
import RegisterScreen from "./LoginScreens/RegisterScreen";
import CameraScreen from "./AuthenticatedScreens/CameraScreen";
import { AuthContext } from "../context/AuthContextProvider";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<Stack.Navigator
			initialRouteName={SCREEN_MAP}
			screenOptions={{ headerTitleAlign: "center" }}>
			{isAuthenticated ? (
				<>
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
						options={{ title: "Camera" }}
					/>
				</>
			) : (
				<>
					<Stack.Screen
						name={SCREEN_LOGIN}
						component={LoginScreen}
						options={{ title: "Login", headerShown: false }}
					/>
					<Stack.Screen
						name={SCREEN_REGISTER}
						component={RegisterScreen}
						options={{
							title: "Register",
							headerShown: false,
						}}
					/>
				</>
			)}
		</Stack.Navigator>
	);
};
export default Navigation;
