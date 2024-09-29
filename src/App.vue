<script setup lang="ts">
import MainContainer from './components/MainContainer/MainContainer.vue';
import Header from './components/Header/Header.vue';
import Drawer from './shared/Drawer/Drawer.vue';
import CardList from './shared/Card/CardList.vue';
import { onBeforeMount, reactive, ref, watch } from 'vue';
import { getSneakers, Sneakers } from './services/apiItems';

const sneakersItems = ref<Sneakers>([]);

const isShowDrawer = ref(false);

const filters = reactive({
	sortBy: '',
	searchQuery: ''
});

const onChangeSelect = (e) => {
	filters.sortBy = e.target.value;
}

const onChangeSearchInput = (e) => {
	filters.searchQuery = e.target.value
}

const showDrawer = () => {
	isShowDrawer.value = true;
}

const closeDrawer = () => {
	isShowDrawer.value = false;
}

const getItems = async (filters) => {
	try {
		const items: Sneakers = await getSneakers(filters);
		sneakersItems.value = items;
	} catch (err) {
		console.error(err);
	}
}

onBeforeMount(getItems);

watch(filters, async () => {
	await getItems(filters);
});
</script>

<template>
	<MainContainer>
		<Header :showDrawer="showDrawer" />
		<!-- Исправленный синтаксис для передачи closeDrawer -->
		<Drawer v-if="isShowDrawer" :closeDrawer="closeDrawer" />
		<div class="p-10">
			<div class="flex justify-between items-center">
				<h2 class="text-3xl font-bold mb-6">Все кроссовки</h2>

				<div class="flex gap-2">
					<label for="sortOptions" class="block mb-2 text-sm font-medium text-gray-700"></label>
					<select @change="onChangeSelect" id="sortOptions" class="py-2 px-3 border rounded-md outline-none">
						<option value="title">По названию:</option>
						<option value="price">По цене (дешевая)</option>
						<option value="-price">По цене (дорогая)</option>
					</select>

					<div class="relative">
						<img class="absolute left-4 top-2.5" src="/search.svg" alt="search">
						<input @change="onChangeSearchInput"
							class="border rounded-md p-1.5 pl-10 pr-4 outline-none focus:border-gray-400" type="text"
							placeholder="Поиск">
					</div>
				</div>
			</div>
			<CardList :items="sneakersItems" />
		</div>
	</MainContainer>
</template>

<style scoped></style>