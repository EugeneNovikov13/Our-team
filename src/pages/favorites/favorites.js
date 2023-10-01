import { useSelector } from 'react-redux';
import { Card, Container, H2, Icon } from '../../components';
import { selectMembers } from '../../redux/selectors';
import styled from 'styled-components';

const FavoritesContainer = ({ className }) => {
	const members = useSelector(selectMembers);

	return (
		<>
			<H2 margin="30px auto">
				<Icon id="fa-star" fontSize="20px" margin="1px 5px 0 0" color="#5543ff" />
				Избранные
			</H2>
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
		</>
	);
};

export const Favorites = styled(FavoritesContainer)``;
