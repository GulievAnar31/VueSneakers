import { reactive, ref, watchEffect } from 'vue';
import { getFavorites } from '../services/apiFavorites';
import { useItemsStore } from '../store/store';
import { Sneaker } from '../services/apiItems';

export function useSneakers() {
	const store = useItemsStore();
	const sneakers = ref<Sneaker[]>([]);
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

			// sneakers.value = store.items;
		} catch (err) {
			console.error('Ошибка при загрузке кроссовок:', err);
		}
	};

	const addFavorite = (id) => {
		store.items = store.items.map((sneaker) => {
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

	return { sneakers, filters, fetchSneakers, addFavorite, onChangeSelect, onChangeSearchInput };
}