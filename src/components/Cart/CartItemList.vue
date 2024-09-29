<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import CartItem from './CartItem.vue';
import { getSneakers, Sneakers } from '../../services/apiItems';

const sneakersItems = ref<Sneakers | unknown>([]);

const getItems = async () => {
	try {
		const items: Sneakers | unknown = await getSneakers();

		sneakersItems.value = items;
	} catch (err) {
		console.error(err);
	}
}

onBeforeMount(getItems)
</script>
<template>
	<div v-for="{ title, imgUrl, price } in sneakersItems" key="" class="flex flex-col flex-1 gap-4">
		<CartItem :title="title" :imgUrl="imgUrl" :price="price" />
	</div>
</template>