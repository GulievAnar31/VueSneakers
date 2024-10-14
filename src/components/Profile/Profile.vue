<script setup lang="ts">
const emit = defineEmits(['showProfile']);
</script>

<template>
	<div class="flex flex-col items-center gap-4 p-8">
		<img class="w-24 h-24 rounded-full border border-slate-200" alt="Profile Picture">
		<div class="text-center">
			<h2 class="text-xl font-bold uppercase">Мой профиль</h2>
			<p class="text-slate-500">Пользователь</p>
		</div>

		<ul class="flex flex-col gap-4 w-full max-w-xs">
			<li @click="emit('showProfile')"
				class="flex items-center justify-between text-slate-500 hover:text-black cursor-pointer">
				<span>Мой аккаунт</span>
				<!-- <img class="w-6" src="/account.svg" alt="account"> -->
			</li>
			<li class="flex items-center justify-between text-slate-500 hover:text-black cursor-pointer">
				<span>Заказы</span>
				<!-- <img class="w-6" src="/orders.svg" alt="orders"> -->
			</li>
			<li class="flex items-center justify-between text-slate-500 hover:text-black cursor-pointer">
				<span>Выход</span>
				<!-- <img class="w-6" src="/logout.svg" alt="logout"> -->
			</li>
		</ul>
	</div>
</template>

<style scoped></style>