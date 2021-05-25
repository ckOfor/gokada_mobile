import { createSwitchNavigator } from "react-navigation";
import { DrawerNavigator } from "./drawer-navigator";

export const RootNavigator = createSwitchNavigator({
  Main: { screen: DrawerNavigator },
})
