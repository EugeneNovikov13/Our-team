import { ACTION_TYPE } from './action-type';

export const setFavoritesMembers = (members) => ({
	type: ACTION_TYPE.SET_FAVORITES_MEMBERS,
	payload: members,
});
