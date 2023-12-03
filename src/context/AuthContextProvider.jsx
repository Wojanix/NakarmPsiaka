import React, { createContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import {
	SECURE_STORAGE_ACCESS_TOKEN,
	SECURE_STORAGE_REFRESH_TOKEN,
} from "../constants/strings";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const saveTokens = async () => {
		console.log("savetokens" + accessToken, refreshToken);
		await SecureStore.setItemAsync(
			SECURE_STORAGE_ACCESS_TOKEN,
			accessToken
		);
		await SecureStore.setItemAsync(
			SECURE_STORAGE_REFRESH_TOKEN,
			refreshToken
		);
	};

	const setTokens = (accessToken, refreshToken) => {
		setAccessToken(accessToken);
		setRefreshToken(refreshToken);
	};

	useEffect(() => {
		async function getValuesFromSecureStorage() {
			let accessToken = await SecureStore.getItemAsync(
				SECURE_STORAGE_ACCESS_TOKEN
			);
			let refreshToken = await SecureStore.getItemAsync(
				SECURE_STORAGE_REFRESH_TOKEN
			);

			if (accessToken && refreshToken) {
				setAccessToken(accessToken);
				setRefreshToken(refreshToken);
				// will be checked if not expired
				setIsAuthenticated(true);
			}
		}

		getValuesFromSecureStorage();
	}, []);

	useEffect(() => {
		if (accessToken !== null && refreshToken !== null) {
			console.log("useEffect" + accessToken, refreshToken);

			saveTokens();
		}
	}, [accessToken, refreshToken]);

	return (
		<AuthContext.Provider
			value={{
				setTokens,
				accessToken,
				refreshToken,
				setIsAuthenticated,
				isAuthenticated,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
