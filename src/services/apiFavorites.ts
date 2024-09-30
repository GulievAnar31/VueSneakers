import { mande } from "mande";

export type Favorites = Number[];

const apiItems = mande('https://f3b703aeed52fca6.mokky.dev/favorites');

export const getFavorites = async (): Promise<Favorites> => {
	return await apiItems.get<Favorites>();
}