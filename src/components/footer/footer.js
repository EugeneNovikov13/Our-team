import {GitHubIconLink} from './components/gitHubIconLink';
import {useSelector} from 'react-redux';
import {selectMembers} from '../../redux/selectors';
import styled from 'styled-components';

const FooterContainer = ({className}) => {
	const members = useSelector(selectMembers);

	return (
		<footer className={className}>
			{Object.entries(members).map(([id, {name, social, surname}]) => (
				<div key={id} className='member-social'>
					<GitHubIconLink link={social}/>
					<div>
						{name} {surname}
					</div>
				</div>
			))}
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	padding: 20px 70px;

	& .member-social {
		display: flex;
		margin: 5px 0;
	}
`;
