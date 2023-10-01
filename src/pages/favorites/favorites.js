import { useDispatch, useSelector } from "react-redux";
import { Card, Container, H2, Icon } from '../../components';
import { selectFavorites } from "../../redux/selectors";
import styled from 'styled-components';
import { useLayoutEffect } from "react";
import { getFavorites } from "../../utils";
import { setFavoritesMembers } from "../../redux/actions/set-favorites-members";

const FavoritesContainer = ({ className }) => {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);

	//используем хук и localStorage, чтобы избранное не терялось при перезагрузке страницы
	useLayoutEffect(() => {
		const favoritesMembers = getFavorites();

		if (favoritesMembers.length < 1) return;

		dispatch(setFavoritesMembers(favoritesMembers));
	}, [dispatch]);

	return (
		<>
			<H2 margin="30px auto">
				<Icon id="fa-star" fontSize="20px" margin="1px 5px 0 0" color="#5543ff" />
				Избранные
			</H2>
			<Container>
				{Object.entries(favorites).map(([id, { image, name, age, about }]) => (
					<Card
						key={id}
						id={id}
						image={image}
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
