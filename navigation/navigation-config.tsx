import {
  StackNavigatorConfig,
  TabNavigatorConfig,
  DrawerNavigatorConfig
} from "react-navigation"

/**
 * The default stack navigator config for this app.
 */
export const DEFAULT_STACK_NAVIGATOR_CONFIG: StackNavigatorConfig = {
  headerMode: "screen",
  defaultNavigationOptions: {
    header: null,
    gesturesEnabled: false,
    headerTitleAllowFontScaling: false
  }
}

/**
 * The default tab navigator config for this app.
 */
export const DEFAULT_TAB_NAVIGATOR_CONFIG: TabNavigatorConfig = {}

/**
 * The default drawer navigator config for this app.
 */
export const DEFAULT_DRAWER_NAVIGATOR_CONFIG: DrawerNavigatorConfig = {
  hideStatusBar: false,
  overlayColor: 'transparent',
  style: {
    borderTopWidth: 1
  },
  contentOptions: {
    labelStyle: {
      textTransform: "capitalize",
    },
    style: {
      backgroundColor: 'blue',

    }
  }
}
