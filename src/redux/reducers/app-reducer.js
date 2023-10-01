import { ACTION_TYPE } from "../actions";

const initialAppState = {
	isLoading: true
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.END_LOADING: {
			return { ...state, isLoading: false }
		}
		default:
			return state;
	}
};
