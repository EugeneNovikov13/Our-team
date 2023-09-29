import { Route, Routes } from 'react-router-dom';
import { Error, Footer, Header } from './components';
import {Favorites, Main, Member} from "./pages";
import {ERROR} from "./constants";
import styled from 'styled-components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	min-height: 100%;
	margin: 0 auto;
`;

const Page = styled.div``;

export const OurTeam = () => {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/login" element={<Favorites />}></Route>
					<Route path="/member/:id" element={<Member />}></Route>
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />}></Route>
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};
