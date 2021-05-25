import {
	AuthAction,
	AuthState,
    FETCH_RANDOM_DETAILS,
    FETCH_RANDOM_DETAILS_FAILURE,
    FETCH_RANDOM_DETAILS_SUCCESS,
} from "./auth.types"

const initialState: AuthState = {
	data: [],
    loading: false,
}

export function authReducer(
	state = initialState,
	action: AuthAction
): AuthState {
	switch (action.type) {

        case FETCH_RANDOM_DETAILS:
			return {
				...state,
				loading: true
			}

        case FETCH_RANDOM_DETAILS_FAILURE:
            return {
				...state,
				loading: false
			}

		case FETCH_RANDOM_DETAILS_SUCCESS:
            return {
				...state,
				loading: false,
				data: action.payload
			}

		default:
			return state
	}
}