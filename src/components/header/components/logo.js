import { Icon } from '../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LargeText = styled.div`
	font-size: 32px;
	font-weight: bold;
	margin: auto;
`;

export const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-cube" fontSize="33px" color="#5543ff" />
		<LargeText>members</LargeText>
	</Link>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	color: #5543ff;
	text-decoration: none;
`;
