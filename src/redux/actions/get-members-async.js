import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { ACTION_TYPE } from './action-type';

export const getMembersAsync = dispatch => {
	const members = ref(db, 'members');
	get(members).then(snapshot => {
		const loadedMembers = snapshot.val() || {};
		dispatch({
			type: ACTION_TYPE.GET_MEMBERS,
			payload: loadedMembers,
		});
		dispatch({
			type: ACTION_TYPE.END_LOADING,
		});
	});
};
