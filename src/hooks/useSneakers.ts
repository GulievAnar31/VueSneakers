// composables/useSneakers.ts
import { ref, reactive } from 'vue';
import { getFavorites } from '../services/apiFavorites';
import { useItemsStore } from '../store/store';
import { Sneaker } from '../services/apiItems';

export function useSneakers() {
	const store = useItemsStore();
	const sneakersItems = ref<Sneaker[]>([]);
	const filters = reactive({ sortBy: '', searchQuery: '' });

	const fetchFavorites = async () => {
		try {
			const favorites = await getFavorites();
			return favorites;
		} catch (err) {
			console.error(err);
			return [];
		}
	};

	const fetchSneakers = async () => {
		try {
			const favorites = await fetchFavorites();
			await store.fetchItems(filters);
			const favoriteSet = new Set(favorites);

			sneakersItems.value = store.items.map(item => ({
				...item,
				isFavorite: favoriteSet.has(item.id)
			}));
		} catch (err) {
			console.error(err);
		}
	};

	const addFavorite = (id) => {
		sneakersItems.value = sneakersItems.value.map((sneaker) => {
			if (sneaker.id === id) {
				sneaker.isFavorite = true;
			}
			return sneaker;
		});
	};

	const onChangeSelect = (e) => {
		filters.sortBy = e.target.value;
	};

	const onChangeSearchInput = (e) => {
		filters.searchQuery = e.target.value;
	};

	return { sneakersItems, filters, fetchSneakers, addFavorite, onChangeSelect, onChangeSearchInput };
}