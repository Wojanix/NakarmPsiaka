import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SettingRecord from "../components/Settings/SettingRecord";
import { COLOR_MAIN_BG } from "../constants/colors";


const SettingsScreen = () => {

	const writeOutSomething = () =>{
		console.log("Guzik wcisniety")
	}

	const settingsArray = [
		{title:"Allow localization", text: "Allows us to sell your soul", icon: "map-pin", som: true},
		{title:"Allow localization", text: "Allows us to sell your soul", icon: "map-pin", som: true},
		{title:"Allow everything", text: "Allows us to fuck u rmom", icon: "map-pin", som: false},
		{title:"Allow everything", text: "Allows us to fuck u rmom", icon: "map-pin", som: true},
		{title:"Remove my data", text: "Your data won't be removed :D", icon: "trash", iconSize: 32, som: true},
		{title:"Remove my data", text: "Your data won't be removed :D", icon: "trash", iconSize: 32, som: false, argFunction: ()=>writeOutSomething()},
		{title:"Remove my data", text: "Your data won't be removed :D", icon: "trash", iconSize: 32, som: false, argFunction: ()=>writeOutSomething()},
	]

	// settingsArray.map((rec)=>{console.log(rec.icon)})
	return (
		<View >
			{settingsArray.map((rec, index)=>(
				<SettingRecord title={rec.title}  text={rec.text}  icon={rec.icon}  som={rec.som} index={index} iconSize={rec.iconSize}/>
			))}
		</View>
	);
};
export default SettingsScreen;

