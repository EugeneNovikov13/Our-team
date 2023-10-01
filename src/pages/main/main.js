import { useSelector } from 'react-redux';
import { Card, Container } from '../../components';
import { selectMembers } from '../../redux/selectors';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const members = useSelector(selectMembers);

	return (
		<div className={className}>
			<div className="main-discription">
				Мы - команда трех энтузиастов веб-разработки, находящихся на захватывающем
				пути обучения в мире веб-технологий. В настоящий момент мы учимся в школе
				Result School, стремясь освоить все тонкости и секреты создания
				современных веб-приложений. Наша цель - вдохновляться, изучать новое и
				совершенствовать свои навыки вместе, чтобы создавать качественные и
				инновационные веб-проекты.
			</div>
			<Container>
				{Object.entries(members).map(([id, { photo, name, age, about }]) => (
					<Card
						key={id}
						id={id}
						image={photo}
						name={name}
						age={age}
						about={about}
					></Card>
				))}
			</Container>
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .main-discription {
		width: 70%;
		margin: 5% 15% 0;
	}
`;
