<script setup lang="ts">
import Card from './Card.vue';
import { Sneakers } from '../../services/apiItems';

const props = defineProps<{
	items: Sneakers;
}>();
</script>

<template>
	<div class="grid grid-cols-4 gap-5">
		<div v-for="{ title, imgUrl, price, isFavorite, id } in props.items" :key="id">
			<Card :id="id" :title="title" :imgUrl="imgUrl" :price="price" :isFavorite="isFavorite" />
		</div>
	</div>
</template>