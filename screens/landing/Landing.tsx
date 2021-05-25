// react
import React from "react"

// react-native
import {
	View
} from "react-native";

// third-party
import { NavigationScreenProps } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";

// redux
import { ApplicationState } from "../../redux";
import { fetchRandomDetailsAsync, notify } from "../../redux/auth";

// components
import { Button } from "../../components/button";

// styles
import { Header } from "../../components/header";

interface DispatchProps {
	notify: (message:string, type: string) => void
	fetchRandomDetailsAsync: () => void
}

interface StateProps {
	isLoading: boolean
}

interface LandingScreenProps extends NavigationScreenProps {}

type Props = DispatchProps & StateProps & LandingScreenProps


const Landing = (props: Props) => {
	const { navigation, isLoading, fetchRandomDetailsAsync } = props

	return (
		<View>
			<Header
				leftIcon="menuIcon"
				titleTx={`moov.headerText`}
				navigation={navigation}
				onLeftPress={() => {
					navigation.openDrawer()
				}}
			/>

			<View
				style={{
					marginTop: 50
				}}
			>
				<Button
					onPress={() => fetchRandomDetailsAsync()}
					text="Click here to fetch data"
					loading={isLoading}
				/>
			</View>
		</View>
	)
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
	notify: (message:string, type: string) => dispatch(notify(message, type)),
	fetchRandomDetailsAsync: () => dispatch(fetchRandomDetailsAsync())
});

let mapStateToProps: (state: ApplicationState) => StateProps;
mapStateToProps = (state: ApplicationState): StateProps => ({
	isLoading: state.auth.loading
});

export const LandingScreen = connect<StateProps>(
	// @ts-ignore
	mapStateToProps,
	mapDispatchToProps
)(Landing);
