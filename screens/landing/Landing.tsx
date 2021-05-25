// react
import React from "react"

// react-native
import {
	View, Text, ViewStyle
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
	data: Array<any>
}

interface LandingScreenProps extends NavigationScreenProps {}

type Props = DispatchProps & StateProps & LandingScreenProps

const CONTAINER: ViewStyle = {
	backgroundColor: '#00000010',
	height: '100%'
}

const ROOT: ViewStyle = {
	marginTop: 50,
	alignItems: 'center',
}

const BUTTON: ViewStyle = {
	marginTop: 50
}

const Landing = (props: Props) => {
	const { navigation, isLoading, fetchRandomDetailsAsync, data } = props

	console.tron.log(data)

	return (
		<View
			style={CONTAINER}
		>
			<Header
				leftIcon="menuIcon"
				titleTx={`moov.headerText`}
				navigation={navigation}
				onLeftPress={() => {
					navigation.openDrawer()
				}}
			/>

			<View
				style={ROOT}
			>

				{
					data && data.length < 1 && (
						<Text>List is empty</Text>
					)
				}

				{
					data && Object.keys(data).length > 0 && (
						<View>
							<Text>Todo Id: {`${data.id}`}</Text>
							<Text>Todo title: {`${data.title}`}</Text>
							<Text>Todo Status: {`${data.completed}`}</Text>
						</View>
					)
				}

				<Button
					onPress={() => fetchRandomDetailsAsync()}
					text="Click here to fetch data"
					loading={isLoading}
					style={BUTTON}
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
	isLoading: state.auth.loading,
	data: state.auth.data
});

export const LandingScreen = connect<StateProps>(
	// @ts-ignore
	mapStateToProps,
	mapDispatchToProps
)(Landing);
