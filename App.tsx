// react
import React, { useState, useEffect } from 'react';

// react native
import { Text, View } from 'react-native';

// third-party libraries
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { NavigationScreenProps } from "react-navigation"
import * as Font from "expo-font"
import { Asset } from 'expo-asset'
import { Root } from "native-base";

// redux
import DebugConfig from "./config/debug-config"
import { AppWithNavigationState } from "./navigation/redux-navigation"
import configureStore from "./redux/create-store"
import { colors } from './theme';

// store
export const { store, persistor } = configureStore();

type State = {
	isLoadingComplete: boolean
	onAnimationEnd: boolean
	hideSPlash: boolean
}

interface DispatchProps {
	startup: () => void
	checkLocationPermissionAsync: () => void
}

interface MyProps extends NavigationScreenProps {
	skipLoadingScreen: boolean
}

type Props = MyProps & DispatchProps & State


const App = (props: Props) =>  {
	const [isLoadingComplete, setLoadingComplete] = useState(false)

	useEffect(() => {
		loadResourcesAsync();
	})

	const loadResourcesAsync = async () => {
		setLoadingComplete(true)
	};

	if (!isLoadingComplete) return null;

	return (
		<Provider
			store={store}
		>
			<PersistGate
				persistor={persistor}
				loading={<Text> Loading... </Text>}>
				<View
					style={{
						flex: 1
					}}
				>
					<Root>
						<AppWithNavigationState />
					</Root>
				</View>
			</PersistGate>
		</Provider>
	)


}

// allow reactotron overlay for fast design in dev mode
//@ts-ignore
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App
