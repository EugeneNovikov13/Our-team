import { useSelector } from "react-redux";
import { selectMembers, selectTeamInfo } from "../../redux/selectors";
import { Card, Container } from '../../components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const members = useSelector(selectMembers);
	const teamInfo = useSelector(selectTeamInfo);

	return (
		<div className={className}>
			<div className="main-discription">
				{teamInfo}
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
