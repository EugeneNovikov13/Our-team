import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMembersAsync } from '../../redux/actions';
import { selectMembers } from '../../redux/selectors';

const MainContainer = ({ className }) => {
	const dispatch = useDispatch();
	const members = useSelector(selectMembers);

	useEffect(() => {
		dispatch(getMembersAsync);
	}, [dispatch]);

	console.log('main: ', members);

	return <></>;
};

export const Main = styled(MainContainer)``;
