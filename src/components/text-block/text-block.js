import styled from 'styled-components';

const TextBlockContainer = ({className, title, info}) => {
	return (
		<div className={className}>
			<h3>{title}</h3>
			<p>{info}</p>
		</div>
	);
};

export const TextBlock = styled(TextBlockContainer)`
  & h3 {
    color: #707070;
    font-size: 20px;
    margin: 20px 0 5px 0;
  }

  & p {
    margin: 0;
    font-size: 18px;
  }
`;
