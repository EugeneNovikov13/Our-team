import { Icon } from '../../icon/icon';

export const GitHubIconLink = ({ link }) => {
	return (
		<a href={link}>
			<Icon id="fa-github" fontSize="20px" margin="-1px 5px 0 0" color="#000" />
		</a>
	);
};
