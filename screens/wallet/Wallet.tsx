// react
import React, { useState, useEffect, useRef } from "react"

// react-native
import {
	View, ViewStyle, Text, TextStyle, StatusBar, TouchableOpacity, Platform, Keyboard, Image
} from "react-native";

// third-party
import { NavigationScreenProps, SafeAreaView } from "react-navigation";
import { connect } from "react-redux";
import { Dispatch } from "redux";

// redux
import { ApplicationState } from "../../redux";

// components
import { Button } from "../../components/button";

// styles
import { Layout } from "../../constants";
import { colors, fonts, images } from "../../theme";
import { Header } from "../../components/header";

interface DispatchProps {
	notify: (message:string, type: string) => void
}

interface StateProps {

}

interface WalletScreenProps extends NavigationScreenProps {}

type Props = DispatchProps & StateProps & WalletScreenProps


const Wallet = (props: Props) => {
	const { navigation, isLoading } = props

	return (
		<View
            style={{
                backgroundColor: 'green',
                height: '100%'
            }}
        >
            <Header
                leftIcon="menuIcon"
                titleTx={`moov.headerText`}
                navigation={navigation}
                onLeftPress={() => {
                    navigation.openDrawer()
                }}
                title={'Wallet'}
            />
        </View>
	)
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
	notify: (message:string, type: string) => dispatch(notify(message, type)),
});

let mapStateToProps: (state: ApplicationState) => StateProps;
mapStateToProps = (state: ApplicationState): StateProps => ({

});

export const WalletScreen = connect<StateProps>(
	// @ts-ignore
	mapStateToProps,
	mapDispatchToProps
)(Wallet);
