import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR_PRIMARY } from "../../constants/colors";
import MainButton from "../../components/MainComponents/MainButton";
import { REGISTER_URL } from "./../../constants/urls";
import { AuthContext } from "../../context/AuthContextProvider";

const LoginScreen = () => {
	const { setTokens, setIsAuthenticated } = useContext(AuthContext);
	if (setTokens === null) return;

	const [registeredUser, setRegisteredUser] = useState({
		username: null,
		email: null,
		password: null,
	});

	const registerPost = async () => {
		console.log(REGISTER_URL);
		const response = await fetch(REGISTER_URL, {
			method: "POST",
			body: JSON.stringify(registeredUser),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const json = await response.json();
		setTokens(json.accessToken, json.refreshToken);
		setIsAuthenticated(true);
	};

	const handleRegister = () => {
		console.log(registeredUser);
		registerPost();
	};

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				key={1}
				style={styles.gradientBG}
				colors={["rgba(167,253,206,1)", "transparent"]}
				end={{ x: 0.2, y: 0.8 }}>
				<View>
					<Text>Jaki jest twój e-mail?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="michal@mail.com"
						onChangeText={(text) =>
							setRegisteredUser({
								...registeredUser,
								email: text,
							})
						}
					/>
				</View>
				<View>
					<Text>Jak mamy się do ciebie odzywać?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="@michalek69"
						onChangeText={(text) =>
							setRegisteredUser({
								...registeredUser,
								username: text,
							})
						}
					/>
				</View>
				<View>
					<Text>Podaj swoje hasło?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="***********"
						secureTextEntry={true}
						onChangeText={(text) =>
							setRegisteredUser({
								...registeredUser,
								password: text,
							})
						}
					/>
				</View>
				<View>
					<Text>Powtórz swoje hasło?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="***********"
						secureTextEntry={true}
					/>
				</View>
				<MainButton
					styleArg={{ marginTop: 10 }}
					text="Zacznij pomagać!"
					width={200}
					onPress={async () => handleRegister()}
				/>
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
		gap: 10,
	},
	textInput: {
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
	entry: {},
});

export default LoginScreen;
