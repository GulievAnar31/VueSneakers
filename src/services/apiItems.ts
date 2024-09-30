import { mande } from "mande";

export interface Sneaker {
	id: number;
	title: string;
	imgUrl: string;
	price: string;
	isFavorite: boolean;
}

export type Sneakers = Sneaker[];

const apiItems = mande('https://f3b703aeed52fca6.mokky.dev/items');

export const getSneakers = async (params?: { sortBy?: string, searchQuery?: string }): Promise<Sneakers> => {
	let url = '';
	const queryParams: string[] = [];

	if (params?.sortBy) {
		queryParams.push(`sortBy=${params.sortBy}`);
	}

	if (params?.searchQuery) {
		queryParams.push(`title=${params.searchQuery}`);
	}

	if (queryParams.length > 0) {
		url += `?${queryParams.join('&')}`;
	}

	return await apiItems.get<Sneakers>(url);
}