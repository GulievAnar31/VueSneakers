import { mande } from "mande";
import { defineStore } from "pinia";
import { getSneakers } from "../services/apiItems";

export interface Sneaker {
	id: number;
	title: string;
	imgUrl: string;
	price: string;
	isFavorite: boolean;
}

export type Sneakers = Sneaker[];

const apiItems = mande('https://f3b703aeed52fca6.mokky.dev/items');

export const useItemsStore = defineStore('items', {
	state: () => ({
		items: [] as Sneakers,
		loading: false,
		error: null as string | null
	}),
	getters: {
		getItems: (state) => state.items,
	},
	actions: {
		async fetchItems(params?: { sortBy?: string, searchQuery?: string }) {
			this.loading = true;
			this.error = null;

			try {
				const sneakers = await getSneakers(params);
				this.items = sneakers;
			} catch (error) {
				this.error = 'Ошибка при загрузке данных';
			} finally {
				this.loading = false;
			}
		},
	}
});