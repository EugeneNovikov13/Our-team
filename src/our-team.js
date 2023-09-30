import { Route, Routes } from 'react-router-dom';
import { Error, Footer, Header } from './components';
import { Favorites, Main, Member } from './pages';
import { ERROR } from './constants';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { selectMembers } from "./redux/selectors";
import { useEffect } from "react";
import { getMembersAsync } from "./redux/actions";

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1230px;
	min-height: 100%;
	background-color: #f3f3f3;
	margin: auto;
`;

const Page = styled.div`
	padding: 80px 0;
`;

export const OurTeam = () => {
	const dispatch = useDispatch();
	const members = useSelector(selectMembers);

	useEffect(() => {
		dispatch(getMembersAsync);
	}, [dispatch]);

	console.log('main: ', members);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/favorites" element={<Favorites />}></Route>
					<Route path="/member/:id" element={<Member />}></Route>
					<Route
						path="*"
						element={<Error error={ERROR.PAGE_NOT_EXIST} />}
					></Route>
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
