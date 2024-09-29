<script setup lang="ts">
defineProps({
	imgUrl: String,
	title: String,
	price: Number,
})
</script>
<template>
	<div class="flex items-center border border-slate-100 p-4 rounded-xl gap-4">
		<img class="w-16 h-16" :src="imgUrl" alt="sneaker">
		<div class="flex flex-col justify-between">
			<p>{{ title }}</p>

			<div class="flex justify-between mt-2">
				<b>{{ price }}. руб</b>

				<img class="cursor-pointer opcaity-40 hover:opacity-100 transition" src="/close.svg" alt="close">
			</div>
		</div>
	</div>
</template>