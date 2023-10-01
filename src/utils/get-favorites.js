export const getFavorites = () => {
	const favoritesMembersJSON = localStorage.getItem("favorites");

	if (!favoritesMembersJSON) return {};

	return JSON.parse(favoritesMembersJSON);
};
