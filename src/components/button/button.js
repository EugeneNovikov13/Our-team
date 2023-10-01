import styled from 'styled-components';

const ButtonContainer = ({ className, onClick, margin, children }) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: 100px;
	height: 45px;
	color: #707070;
	font-size: 18px;
	margin: ${({ margin }) => (margin ? margin : '0px')};
	background-color: #fff;
	border: 1px solid #d2d2d2;
	border-radius: 8px;
	padding: 10px;
	cursor: pointer;

	&:hover {
		color: #5543ff;
		border-color: #5543ff;
	}
`;
