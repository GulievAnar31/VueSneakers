<script setup lang="ts">
import MainContainer from './components/MainContainer/MainContainer.vue';
import Header from './components/Header/Header.vue';
import Drawer from './shared/Drawer/Drawer.vue';
import CardList from './shared/Card/CardList.vue';
import Filter from './components/FilterBar/Filter.vue';
import { useSneakers } from './hooks/useSneakers'; // Хук для работы с данными
import { useDrawer } from './hooks/useDrawer'; // Хук для работы с Drawer
import { onBeforeMount, provide, watch } from 'vue';

const { sneakersItems, filters, fetchSneakers, addFavorite, onChangeSearchInput, onChangeSelect } = useSneakers();
const { isShowDrawer, showDrawer, closeDrawer } = useDrawer();

onBeforeMount(() => fetchSneakers());
watch(filters, fetchSneakers);

provide('addFavorite', addFavorite);
provide('closeDrawer', closeDrawer);
</script>

<template>
	<MainContainer>
		<Header @showDrawer="showDrawer" />
		<Drawer v-if="isShowDrawer" :closeDrawer="closeDrawer" />
		<div class="p-10">
			<div class="flex justify-between items-center">
				<h2 class="text-3xl font-bold mb-6">Все кроссовки</h2>
				<Filter :sortBy="filters.sortBy" :searchQuery="filters.searchQuery" @changeSelect="onChangeSelect"
					@changeSearchInput="onChangeSearchInput" />
			</div>
			<CardList :items="sneakersItems" />
		</div>
	</MainContainer>
</template>

<style scoped></style>