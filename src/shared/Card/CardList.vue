<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import Card from './Card.vue';
import { getSneakers, Sneaker } from '../../services/apiItems';

const sneakers = ref<Sneaker[]>([])

onBeforeMount(async () => {
	try {
		const data = await getSneakers();

		sneakers.value = data;
	} catch (err) {
		console.error(err);
	}
});
</script>

<template>
	<div v-if="sneakers && sneakers.length > 0" class="grid grid-cols-4 gap-5">
		<div v-for="sneaker in sneakers" :key="sneaker.id">
			<Card :id="sneaker.id" :title="sneaker.title" :imgUrl="sneaker.imgUrl" :price="sneaker.price"
				:isFavorite="sneaker.isFavorite" />
		</div>
	</div>
	<div v-else>
		<p>Данные загружаются...</p>
	</div>
</template>