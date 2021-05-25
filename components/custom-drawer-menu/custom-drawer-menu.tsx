import * as React from "react"
import {
  Image,
  ImageStyle, Keyboard,
  StatusBar,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native"
import {
  NavigationScreenProps,
  DrawerItems,
  DrawerItemsProps
} from "react-navigation"
import {colors} from "../../theme"
import { Header } from "../header"
import {Text} from "native-base";
import {Dispatch} from "redux";
import {ApplicationState} from "../../redux";
import { connect } from "react-redux"

interface DispatchProps {

}

interface StateProps {

}

interface BaseProps extends NavigationScreenProps {}

type CustomDrawerMenuProps = DispatchProps & StateProps & BaseProps & DrawerItemsProps

const ROOT: ViewStyle = {
  height: 250,
  // backgroundColor: 'red'
}

const PROFILE_IMAGE_VIEW: ViewStyle = {
  height: 250,
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const PROFILE_IMAGE: ImageStyle = {
  height: 62,
  width: 62,
  marginRight: 20,
  borderRadius: 31
}

const FIRST_NAME: TextStyle = {
  marginTop: 10,
  marginRight: 20,
  color: '#FFF',
}

const DIVIDER: ViewStyle = {
  height: 8,
  backgroundColor: colors.primaryPink
}

const CustomDrawer = (props: CustomDrawerMenuProps) => {

  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <View style={ROOT}>
        <TouchableOpacity
          style={PROFILE_IMAGE_VIEW}
        >

          <Text>
            Chinedu Ofor
          </Text>
        </TouchableOpacity>

        <View
          style={DIVIDER}
        />
      </View>

      <DrawerItems {...props} />
    </View>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  // getUserLocation: () => dispatch(DeviceActions.fetchUserLocationAsync())
})

const mapStateToProps = (state: ApplicationState): StateProps => ({
  // user_pic_url: state.user.user_details.image,
  // firstName: state.user.user_details.first_name,
  // lastName: state.user.user_details.last_name,
})

export const CustomDrawerMenu = connect<StateProps>(
  // @ts-ignore
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawer)
