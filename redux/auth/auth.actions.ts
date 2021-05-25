// third-parties
import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import { Toast } from "native-base";

// Redux
import { ApplicationState } from ".."

// types
import {
	FETCH_RANDOM_DETAILS, FETCH_RANDOM_DETAILS_FAILURE, FETCH_RANDOM_DETAILS_SUCCESS,
} from "./auth.types";

// APIs
import {
	fetchRandomDetails as apiFetchRandomDetails,
} from "../../services/api"

export const fetchRandomDetails = () => ({
	type: FETCH_RANDOM_DETAILS,
})

export const fetchRandomDetailsFailure = () => ({
	type: FETCH_RANDOM_DETAILS_FAILURE,
})

export const fetchRandomDetailsSuccess = (payload: Array<any>) => ({
	type: FETCH_RANDOM_DETAILS_SUCCESS,
	payload
})

export const fetchRandomDetailsAsync = (): ThunkAction<void, ApplicationState, null, Action<any>> => async (
	dispatch,
	getState
) => {
	dispatch(fetchRandomDetails())

	try {
		const result = await apiFetchRandomDetails()
		const { kind, data } = result
		console.tron.log(result, "fetchRandomDetailsAsync")

		if (kind === "ok") {
			dispatch(fetchRandomDetailsSuccess(result.data))
		} else {
			dispatch(notify(`${data.message}`, 'danger'))
			dispatch(fetchRandomDetailsFailure())
		}
	} catch ({ message }) {
		dispatch(fetchRandomDetailsFailure())
		dispatch(notify(`${message}`, 'danger'))
	}
}

export const notify = (message: string, type: string): ThunkAction<
  void,
  ApplicationState,
  null,
  Action<any>
  > => async (dispatch, getState) => {
  Toast.show({ text: `${message}`, type: `${type}`, position: 'top', duration: 3000, swipeDisabled: true })
};
