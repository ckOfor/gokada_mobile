import { combineReducers, Reducer } from "redux"
import { authReducer as auth, AuthState } from "./auth"
import { navReducer } from "../navigation/redux-navigation"

export interface ApplicationState {
  nav: any
  auth: AuthState
}

export const appReducer: Reducer<ApplicationState> = combineReducers({
  nav: navReducer,
  auth
});
