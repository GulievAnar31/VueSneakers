import { ref } from 'vue';

export function useDrawer() {
	const isShowDrawer = ref(false);

	const showDrawer = () => {
		isShowDrawer.value = true;
	};

	const closeDrawer = () => {
		isShowDrawer.value = false;
	};

	return { isShowDrawer, showDrawer, closeDrawer };
}
