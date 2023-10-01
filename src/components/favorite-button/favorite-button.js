import styled from "styled-components";

const FavoriteButtonContainer = ({className, onClick, iconSrc}) => {
	return <img className={className} onClick={onClick} src={iconSrc} alt=""/>
}

export const FavoriteButton = styled(FavoriteButtonContainer)`
	width: 100px;
	height: 45px;
	margin: ${({ margin }) => (margin ? margin : '0px')};
	background-color: #fff;
	border: 1px solid #d2d2d2;
	border-radius: 8px;
	padding: 2px;
	cursor: pointer;

	&:hover {
		border-color: #5543ff;
	}
`;
