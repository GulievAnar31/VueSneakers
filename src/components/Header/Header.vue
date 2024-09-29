<script setup lang="ts">
import { defineProps } from 'vue';

// Определяем тип для пропса
interface Props {
	showDrawer: () => void;
}

// Используем defineProps с указанным типом
const props = defineProps<Props>();
</script>

<template>
	<header class="flex justify-between border-b border-slate-100 p-8">
		<div class="flex items-center gap-4">
			<img class="w-10" src="/logo.png" alt="Logo">
			<div>
				<h1 class="text-xl font-bold uppercase">Vue Sneakers</h1>
				<p class="text-slate-500">Магазин лучших кроссовок</p>
			</div>
		</div>

		<ul class="flex items-center gap-10">
			<li @click="showDrawer()" class="flex items-center gap-3 text-slate-500 hover:text-black cursor-pointer">
				<img src="/cart.svg" alt="cart">
				<span>1205 руб</span>
			</li>
			<li class="flex items-center gap-3 text-slate-500 hover:text-black cursor-pointer">
				<img src="/heart.svg" alt="heart">
				<span>Закладки</span>
			</li>
			<li class="flex items-center gap-3 text-slate-500 hover:text-black cursor-pointer">
				<img src="/profile.svg" alt="heart">
				<span>Профиль</span>
			</li>
		</ul>
	</header>
</template>