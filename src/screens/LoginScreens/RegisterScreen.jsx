import React from "react";
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
import { COLOR_PRIMARY } from "../../constants/colors";
import { SCREEN_MAP, SCREEN_REGISTER } from "../../constants/strings";
import MainButton from "../../components/MainComponents/MainButton";

const LoginScreen = ({ navigation }) => {
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
					/>
				</View>
				<View>
					<Text>Jak mamy się do ciebie odzywać?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="@michalek69"
					/>
				</View>
				<View>
					<Text>Jaki jest twój numer PESEL?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="123123123123"
					/>
				</View>
				<View>
					<Text>Podaj swoje hasło?</Text>
					<TextInput
						style={styles.textInput}
						placeholder="***********"
						secureTextEntry={true}
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
					onPress={() => navigation.navigate(SCREEN_MAP)}
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
