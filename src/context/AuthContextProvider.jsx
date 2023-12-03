import React, { createContext, useState } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [accessToken, setAccessToken] = useState(null);
	const [refreshToken, setRefreshToken] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setTokens = (accessToken, refreshToken) => {
		setAccessToken(accessToken);
		setRefreshToken(refreshToken);
	};

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
