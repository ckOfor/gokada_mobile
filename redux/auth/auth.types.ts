export const FETCH_RANDOM_DETAILS = "FETCH_RANDOM_DETAILS"
type FetchDetails = {
	type: typeof FETCH_RANDOM_DETAILS
}

export const FETCH_RANDOM_DETAILS_FAILURE = "FETCH_RANDOM_DETAILS_FAILURE"
type FetchDetailsFailure = {
	type: typeof FETCH_RANDOM_DETAILS_FAILURE
}

export const FETCH_RANDOM_DETAILS_SUCCESS = "FETCH_RANDOM_DETAILS_SUCCESS"
type FetchDetailsSuccess = {
	type: typeof FETCH_RANDOM_DETAILS_SUCCESS,
	payload: Array<any>
}

export type AuthState = {
    loading: boolean
	data: Array<any>
}

export type AuthAction =
	| FetchDetails
	| FetchDetailsFailure
	| FetchDetailsSuccess