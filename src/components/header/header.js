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
	width: 1230px;
	top: 0;
	display: flex;
	justify-content: flex-start;
	background-color: inherit;
	border-bottom: 1px solid #707070;
`;
