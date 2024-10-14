<script setup lang="ts">
import { RouterLink } from 'vue-router';

const emit = defineEmits(['showDrawer']);
</script>

<template>
	<header class="flex justify-between border-b border-slate-100 p-8">
		<div class="flex items-center gap-4">
			<img class="w-10" src="/logo.png" alt="Logo">
			<div>
				<h1 class="text-xl font-bold uppercase">Guzlik Store</h1>
				<p class="text-slate-500">Магазин лучших кроссовок</p>
			</div>
		</div>
		<nav>
			<ul class="flex items-center gap-10">
				<li @click="emit('showDrawer')"
					class="flex items-center gap-3 text-slate-500 hover:text-black cursor-pointer">
					<img src="/cart.svg" alt="cart">
					<span>1205 руб</span>
				</li>
				<li class="flex items-center gap-3 text-slate-500 hover:text-black cursor-pointer">
					<img src="/heart.svg" alt="heart">
					<span>Закладки</span>
				</li>
				<li class="flex items-center gap-3 text-slate-500 hover:text-black cursor-pointer">
					<RouterLink to="/profile" class="flex items-center gap-3">
						<img src="/profile.svg" alt="profile">
						<span>Профиль</span>
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>