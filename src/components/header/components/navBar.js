import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const NavBarContainer = ({ className }) => {
	return (
		<Div>
			<nav className={className}>
				<Link to={'/'}>Main</Link>
				<Link to={'/favorites'}>Favorites</Link>
			</nav>
		</Div>
	);
};

export const NavBar = styled(NavBarContainer)`
	display: flex;
	text-decoration: none;
	margin-right: 60px;
	& a {
		color: #4d4d4d;
		text-decoration: none;
		margin: auto 30px;
		font-size: 20px;
	}
`;
