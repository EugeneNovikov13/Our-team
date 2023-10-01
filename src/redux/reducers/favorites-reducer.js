import { ACTION_TYPE } from "../actions";

const initialFavoritesState = {
	favMembers: {},
};

export const favoritesReducer = (state = initialFavoritesState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_FAVORITES_MEMBERS:
			return {
				...state,
				favMembers: action.payload,
			}

		default:
			return state;
	}
};
