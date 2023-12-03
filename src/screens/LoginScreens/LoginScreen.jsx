import React, { useContext, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TextInput,
	Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { logo } from "../../images/IMAGES";
import { COLOR_PRIMARY } from "../../constants/colors";
import { SCREEN_REGISTER } from "../../constants/strings";
import { AuthContext } from "../../context/AuthContextProvider";
import { LOGIN_URL } from "../../constants/urls";

const LoginScreen = ({ navigation }) => {
	const { setTokens, setIsAuthenticated } = useContext(AuthContext);
	if (setTokens === null) return;

	const [authenticatingUser, setAuthenticatingUser] = useState({
		username: null,
		email: null,
	});

	const loginPost = async () => {
		const response = await fetch(LOGIN_URL, {
			method: "POST",
			body: JSON.stringify(authenticatingUser),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const json = await response.json();
		setTokens(json.accessToken, json.refreshToken);
		setIsAuthenticated(true);
	};

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				key={1}
				style={styles.gradientBG}
				colors={["rgba(167,253,206,1)", "transparent"]}
				end={{ x: 0.2, y: 0.8 }}>
				<Image source={logo} style={styles.logo} resizeMode="center" />
				<TextInput
					style={styles.textInput}
					placeholder="Email"
					onChangeText={(text) =>
						setAuthenticatingUser({
							...authenticatingUser,
							email: text,
						})
					}
				/>
				<TextInput
					style={styles.textInput}
					secureTextEntry={true}
					placeholder="Hasło"
					onChangeText={(text) =>
						setAuthenticatingUser({
							...authenticatingUser,
							password: text,
						})
					}
					onSubmitEditing={async () => loginPost()}
				/>

				<View style={styles.registerWrapper}>
					<Text style={styles.text}>Chcesz zacząć pomagać? </Text>
					<Pressable
						onPress={() => navigation.navigate(SCREEN_REGISTER)}>
						<Text style={[styles.registerText, styles.text]}>
							Dotknij tutaj.
						</Text>
					</Pressable>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	gradientBG: {
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 100,
		height: 200,
	},
	title: {
		width: 300,
		height: 70,
	},
	textInput: {
		marginTop: 15,
		width: 250,
		backgroundColor: "rgba(207, 207, 207, 0.48)",
		paddingHorizontal: 10,
		borderRadius: 10,
		paddingVertical: 5,
		fontSize: 15,
	},
	registerWrapper: {
		flexDirection: "row",
		marginTop: 10,
	},
	registerText: {
		textDecorationLine: "underline",
		color: COLOR_PRIMARY,
	},
	text: {
		fontSize: 12,
	},
});

export default LoginScreen;
