import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: start;
	align-items: end;
	line-height: 1.5;
	width: 100%;
`;

const NavBarContainer = ({ className }) => {
	return (
		<Div>
			<nav className={className}>
				<Link to={'/'}>Главная</Link>
				<Link to={'/favorites'}>Избранные</Link>
			</nav>
		</Div>
	);
};

export const NavBar = styled(NavBarContainer)`
	display: flex;
	text-decoration: none;
	margin-right: 60px;

	& a {
		color: #707070;
		text-decoration: none;
		margin-left: 30px;
		font-size: 20px;
	}

	& a:hover {
		color: #5543ff;
	}
`;
