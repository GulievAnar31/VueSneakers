<template>
	<div class="flex gap-2">
		<label for="sortOptions" class="block mb-2 text-sm font-medium text-gray-700"></label>
		<select @change="$emit('changeSelect', $event)" id="sortOptions"
			class="py-2 px-3 border rounded-md outline-none">
			<option value="title">По названию:</option>
			<option value="price">По цене (дешевая)</option>
			<option value="-price">По цене (дорогая)</option>
		</select>

		<div class="relative">
			<img class="absolute left-4 top-2.5" src="/search.svg" alt="search" />
			<input @input="$emit('changeSearchInput', $event)"
				class="border rounded-md p-1.5 pl-10 pr-4 outline-none focus:border-gray-400" type="text"
				placeholder="Поиск" />
		</div>
	</div>
</template>

<script setup>
defineProps({
	sortBy: String,
	searchQuery: String
});
</script>

<style scoped></style>