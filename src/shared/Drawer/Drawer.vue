<script setup lang="ts">
import CartItemList from '../../components/Cart/CartItemList.vue';
import DrawerHead from './DrawerHead.vue';
</script>

<template>
	<div class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-50"></div>
	<div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
		<DrawerHead />
		<CartItemList />
		<div class="flex flex-col gap-5 my-7">
			<div class="flex gap-2">
				<span>Итого: </span>
				<div class="flex-1 border-b border-dashed"></div>
				<b>12.900 руб</b>
			</div>
			<div class="flex gap-2">
				<span>Налог 5%: </span>
				<div class="flex-1 border-b border-dashed"></div>
				<b>900 руб</b>
			</div>

			<button
				class="cursor-pointer bg-lime-500 w-full disabled:bg-slate-400 rounded-xl py-3 mb-6 text-white hover:bg-lime-600 active:bg-lime-700">
				Оформить заказ
			</button>
		</div>
	</div>
</template>