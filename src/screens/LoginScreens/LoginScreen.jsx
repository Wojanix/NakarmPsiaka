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
import { logo, title } from "../../images/IMAGES";
import { COLOR_PRIMARY } from "../../constants/colors";
import { SCREEN_MAP, SCREEN_REGISTER } from "../../constants/strings";

const LoginScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				key={1}
				style={styles.gradientBG}
				colors={["rgba(167,253,206,1)", "transparent"]}
				end={{ x: 0.2, y: 0.8 }}>
				<Image source={logo} style={styles.logo} resizeMode="center" />
				{/* <Image
					source={title}
					style={styles.title}
					resizeMode="center"
				/> */}
				<TextInput style={styles.textInput} placeholder="Email" />
				<TextInput
					style={styles.textInput}
					secureTextEntry={true}
					placeholder="Hasło"
					onSubmitEditing={() => navigation.navigate(SCREEN_MAP)}
					autoComplete="email"
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
