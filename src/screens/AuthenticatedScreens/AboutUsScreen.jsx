import React, { useRef } from "react";
import {
	View,
	Text,
	ScrollView,
	Image,
	StyleSheet,
	Pressable,
	Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { paw, title, title2 } from "../../images/IMAGES";
import PagerView from "react-native-pager-view";
import { AntDesign } from "@expo/vector-icons";
import { COLOR_SECONDARY_TEXT } from "../../constants/colors";
import MainButton from "../../components/MainComponents/MainButton";
import Animated, {
	BounceInDown,
	BounceInUp,
	BounceOutDown,
	BounceOutUp,
	FlipOutEasyX,
	ZoomInUp,
} from "react-native-reanimated";

const AboutUsScreen = () => {
	return (
		<Animated.View
			entering={BounceInUp}
			style={[
				styles.pagerView,
				{ display: "flex", flexDirection: "column" },
			]}>
			<PagerView
				style={[
					styles.pagerView,
					{ display: "flex", flexDirection: "column" },
				]}
				orientation="vertical">
				<LinearGradient
					key={1}
					style={[styles.logoScreen, styles.pagerView]}
					colors={["rgba(167,253,206,1)", "transparent"]}
					end={{ x: 0.2, y: 0.8 }}>
					<Image
						source={paw}
						style={styles.imagePaw}
						resizeMode={"cover"}
					/>
					<Image
						source={title}
						style={styles.imageTitle}
						resizeMode={"cover"}
					/>

					{/* <View style={{ position: "absolute", bottom: 70 }}>
          <MainButton
            onPress={() => {}}
            icon={<AntDesign name="down" size={40} color="black" />}
            width={70}
            height={70}
            borderRadius={1000}
            color="rgba(167,253,206,0.7)"
          />
        </View> */}
				</LinearGradient>
				<LinearGradient
					key={2}
					style={[styles.screen, styles.pagerView]}
					colors={["transparent", "rgba(167,253,206,0.5)"]}
					end={{ x: 0.2, y: 0.8 }}>
					<Image
						style={styles.image}
						source={{
							uri: "https://images.squarespace-cdn.com/content/v1/5d025635e9e6f00001d604a6/1561427252699-2EMQCKUQ1J49MYTDGQ47/http-%253A%253Awww.comedycentral.com.au%253Asouth-park%253Avideos%253Athe-worst-of-eric-cartman-casa-bonita-clips.jpg?format=500w",
						}}
					/>
					<View>
						<Image source={title2} style={styles.imageTitle2} />
					</View>
					<View style={styles.textSquare}>
						<Text style={styles.question}>Dlaczego to robimy?</Text>
						<Text style={styles.text}>
							Nasza aplikacja powstała z pragnienia pomocy -
							łączymy ludzi, którzy chcą poprawić los bezdomnych
							psów, kotów i innych zwierząt. Znajdźmy razem
							miejsca, gdzie pomoc jest najbardziej potrzebna, i
							sprawmy, że nasze zaangażowanie stanie się
							rzeczywistością dla tych bezbronnych istot.
						</Text>
					</View>
					<View style={styles.textSquare}>
						<Text style={styles.question}>
							Czemu kochamy zwierzęta?
						</Text>
						<Text style={styles.text}>
							Kochamy zwierzęta za ich lojalność i bezwarunkową
							miłość. Są nieocenionymi towarzyszami życia,
							dodającymi wartość i radość naszym codziennym
							doświadczeniom.
						</Text>
					</View>
					<View
						style={{
							width: "100%",
							alignItems: "center",
							position: "absolute",
							bottom: 30,
						}}>
						<MainButton
							color="rgba(127,213,166,1)"
							width={350}
							fontSize={20}
							height={60}
							text=" Visit Our Website"
							onPress={() => {
								Linking.openURL("http://pornhub.com");
							}}
							icon={
								<Entypo name="globe" size={20} color="white" />
							}
						/>
					</View>
				</LinearGradient>
			</PagerView>
		</Animated.View>
	);
};
export default AboutUsScreen;

const styles = StyleSheet.create({
	logoScreen: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
	},
	screen: {
		width: "100%",
		height: "100%",
		alignContent: "center",
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
	},
	image: {
		width: "90%",
		height: 200,
		margin: "5%",
		borderRadius: 16,
	},
	question: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "600",
		padding: 10,
	},

	imagePaw: {
		width: 200,
		height: 200,
	},
	imageTitle: {
		width: 240,
		height: 100,
	},
	imageTitle2: {
		width: 360,
		height: 32,
	},
	textSquare: {
		paddingHorizontal: 30,
		paddingTop: 5,
	},
	titleText: {
		fontSize: 30,
	},
	text: {
		fontSize: 16.5,
		textAlign: "center",
	},
	pagerView: {
		flex: 1,
	},
});
