import styled from 'styled-components';
import {Badge} from '../badge/badge';

const H2Container = ({
						 className,
						 badge,
						 badgeBgColor,
						 badgeTextColor,
						 children,
					 }) => {
	return (
		<div className={className}>
			<h2>{children}</h2>
			{badge && (
				<Badge bgColor={badgeBgColor} textColor={badgeTextColor}>
					{badge}
				</Badge>
			)}
		</div>
	);
};

export const H2 = styled(H2Container)`
	display: flex;
	align-items: center;

	& h2 {
		font-size: ${({badge}) => (badge ? '26px' : '22px')};
		font-weight: 500;
		color: #707070;
		line-height: 1;
		margin: ${({margin}) => (margin ? margin : '0px')};
		margin-right: ${({badge}) => (badge ? '10px' : '')};
		display: flex;
	}
`;
