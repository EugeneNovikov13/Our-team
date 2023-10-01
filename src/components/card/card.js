import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Photo } from '../photo/photo';
import { H2 } from '../H2/H2';
import { Button } from '../button/button';
import { getFavorites } from '../../utils';
import { useDispatch } from 'react-redux';
import { setFavoritesMembers } from '../../redux/actions/set-favorites-members';

const CardContainer = ({ id, className, image, name, age, about }) => {
	const dispatch = useDispatch();

	const updateFavorites = favMembers => {
		localStorage.setItem('favorites', JSON.stringify(favMembers));
		dispatch(setFavoritesMembers(favMembers));
	};

	const addToFavorites = (id, image, name, age, about) => {
		const favoritesMembers = getFavorites();

		if (!favoritesMembers[id]) {
			favoritesMembers[id] = {
				image,
				name,
				age,
				about,
			};
			updateFavorites(favoritesMembers);
			return;
		}

		delete favoritesMembers[id];
		updateFavorites(favoritesMembers);
	};

	return (
		<div className={className}>
			<Photo src={image} rounded />

			<H2 margin="10px 0">{name}</H2>

			<div className="age">Возраст: {age}</div>

			<p className="about">{about}</p>

			<div className="buttons">
				<Link to={`/member/${id}`}>
					<Button margin="0 10px 0 0">Открыть</Button>
				</Link>
				<Button onClick={() => addToFavorites(id, image, name, age, about)}>
					В избранное
				</Button>
			</div>
		</div>
	);
};

export const Card = styled(CardContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 340px;
	height: 340px;
	border: 1px solid #d2d2d2;
	border-radius: 5px;
	padding: 20px 30px 30px;
	box-shadow: 0px 2px 4px #b6b6b6;
	margin: auto;

	& .age {
		margin: 5px 0;
	}

	& .about {
		text-align: center;
		hyphens: auto;
		margin: 0 0 20px 0;
	}

	& .buttons {
		margin-top: auto;
	}
`;
