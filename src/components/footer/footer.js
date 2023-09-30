import styled from 'styled-components';
import { GitHubIconLink } from './components/gitHubIconLink';
import { EmailIconLink } from './components/emailIconLink';

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<div className="member-social">
				<GitHubIconLink link="https://github.com/EugeneNovikov13" />
				<EmailIconLink link="ggg@gmail.com" />
				<div>Eugene Novikov</div>
			</div>
			<div className="member-social">
				<GitHubIconLink link="https://github.com/MCF512" />
				<EmailIconLink link="ggg@gmail.com" />
				<div>Egor Demchenko</div>
			</div>
			<div className="member-social">
				<GitHubIconLink link="https://github.com/sgurushchuk" />
				<EmailIconLink link="ggg@gmail.com" />
				<div>Stanislav Gurushchuk</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	padding: 20px 40px;
	width: 1000px;

	& .member-social {
		display: flex;
		margin: 5px 0;
	}
`;
