import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/AuthContextProvider";
import Navigation from "./src/screens/Navigation";

const App = () => {
	return (
		<NavigationContainer>
			<AuthContextProvider>
				<Navigation />
			</AuthContextProvider>
		</NavigationContainer>
	);
};

export default App;
