import {get, ref} from 'firebase/database';
import {db} from '../../firebase';
import {ACTION_TYPE} from './action-type';

export const getTeamInfoAsync = dispatch => {
	const teamInfo = ref(db, 'team_info');
	get(teamInfo).then(snapshot => {
		const loadedTeamInfo = snapshot.val() || {};
		dispatch({
			type: ACTION_TYPE.GET_TEAM_INFO,
			payload: loadedTeamInfo,
		});
	});
};
