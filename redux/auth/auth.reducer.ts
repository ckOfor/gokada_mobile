import {
	AuthAction,
	AuthState,
	SET_FCM_TOKEN,
	LOGOUT,
    SIGN_IN_USER,
    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_SUCCESS,
} from "./auth.types"

const initialState: AuthState = {
	notificationId: "",
    loading: false,
	isLoggedIn: false,
}

export function authReducer(
	state = initialState,
	action: AuthAction
): AuthState {
	switch (action.type) {

		case SET_FCM_TOKEN:
			return {
				...state,
				notificationId: action.payload
			}

        case SIGN_IN_USER:
			return {
				...state,
				loading: true
			}

        case SIGN_IN_USER_FAILURE:
		case SIGN_IN_USER_SUCCESS:
            return {
				...state,
				loading: false
			}

		case LOGOUT:
			return initialState

		default:
			return state
	}
}