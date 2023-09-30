import { Icon } from '../../icon/icon';

export const EmailIconLink = ({ link }) => {
	return (
		<a href={link}>
			<Icon id="fa-envelope" fontSize="18px" margin="0 5px 0 0" color="#000" />
		</a>
	);
};
