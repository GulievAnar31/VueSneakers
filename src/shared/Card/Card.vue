<script setup>
import { inject } from 'vue';

defineProps({
	id: Number,
	title: String,
	imgUrl: String,
	price: String,
	isFavorite: Boolean,
})

const addFavorite = inject('addFavorite');
</script>
<template>
	<div
		class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
		<img @click="addFavorite(id)" :src="isFavorite ? '/like-2.svg' : '/like-1.svg'" alt="like"
			class="absolute top-8 left-8">
		<img :src="imgUrl" alt="sneaker">
		<p class="mt-2">{{ title }}</p>
		<div class="flex justify-between mt-5">
			<div class="flex flex-col">
				<span class="text-slate-400">Цена:</span>
				<b>{{ price }} руб</b>
			</div>

			<img src="/plus.svg" alt="plus">
		</div>
	</div>
</template>