import { Logo, NavBar } from './components';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<NavBar />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	height: 80px;
	padding: 20px 40px;
	position: fixed;
	max-width: 1230px;
	min-width: 500px;
	width: 90%;
	top: 0;
	display: flex;
	justify-content: flex-start;
	background-color: inherit;
	border-bottom: 1px solid #707070;

	@media only screen and (max-width: 1230px) {
		width: 100%;
	}
`;
