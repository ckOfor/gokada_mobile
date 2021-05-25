import { createDrawerNavigator } from "react-navigation"
import { DEFAULT_DRAWER_NAVIGATOR_CONFIG } from "./navigation-config"
import { CustomDrawerMenu } from "../components/custom-drawer-menu"
import { LandingScreen } from "../screens/landing";
import { ProfileScreen } from "../screens/profile";
import { WalletScreen } from "../screens/wallet";

export const DrawerNavigator = createDrawerNavigator(
  {
    landing: { screen: LandingScreen },
    profile: { screen: ProfileScreen },
    wallet: { screen: WalletScreen },
  },
  {
    ...DEFAULT_DRAWER_NAVIGATOR_CONFIG,
    contentComponent: CustomDrawerMenu
  }
)
