import styled from 'styled-components';

const PhotoContainer = ({ className, src, rounded }) => {
	return (
		<img
			className={className}
			src={src}
			alt={src}
		/>
	);
};

export const Photo = styled(PhotoContainer)`
	width: ${({ rounded }) => rounded ? '100px' : '300px'};
	height: ${({ rounded }) => rounded ? '100px' : '300px'};;
	border-radius: ${({ rounded }) => rounded ? '50%' : ''};
`;
