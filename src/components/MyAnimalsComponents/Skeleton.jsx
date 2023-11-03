import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
	COLOR_SKELETON_FIELD,
	COLOR_SKELETON_GRADIENT,
} from "../../constants/colors";

// One field in skeleton loading animation
const Skeleton = ({ width, height, style }) => {
	const translateX = useRef(new Animated.Value(-width)).current;
	useEffect(() => {
		Animated.loop(
			Animated.timing(translateX, {
				toValue: width,
				useNativeDriver: true,
				duration: 1000,
			})
		).start();
	}, [width]);

	return (
		<View
			style={StyleSheet.flatten([
				{
					width: width,
					height: height,
					backgroundColor: COLOR_SKELETON_FIELD,
					overflow: "hidden",
				},
				style,
			])}>
			<Animated.View
				style={{
					width: "100%",
					height: "100%",
					transform: [{ translateX: translateX }],
				}}>
				<LinearGradient
					style={{ width: "100%", height: "100%" }}
					colors={[
						"transparent",
						COLOR_SKELETON_GRADIENT,
						"transparent",
					]}
					start={{ x: 1, y: 1 }}
				/>
			</Animated.View>
		</View>
	);
};
export default Skeleton;
