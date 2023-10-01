import { Route, Routes } from 'react-router-dom';
import { Error, Footer, Header, Loader } from './components';
import { Favorites, Main, Member } from './pages';
import { ERROR } from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { getMembersAsync } from './redux/actions';
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1230px;
	min-width: 500px;
	width: 90%;
	justify-content: space-between;
	min-height: 100%;
	background-color: #fafafa;
	margin: auto;

	@media only screen and (max-width: 1230px) {
		width: 100%;
	}
`;

const Page = styled.div`
	padding: 80px 0;
`;

export const OurTeam = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		dispatch(getMembersAsync);
	}, [dispatch]);

	return (
		<AppColumn>
			{isLoading ? (
				<Loader />
			) : (
				<>
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
				</>
			)}
		</AppColumn>
	);
};
