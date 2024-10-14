import { createRouter, createWebHistory } from 'vue-router';
import CardList from '../../shared/Card/CardList.vue';
import Profile from '../Profile/Profile.vue';
import { useSneakers } from '../../hooks/useSneakers';

const routes = [
	{
		path: '/profile',
		component: Profile
	},
	{
		path: '/',
		component: CardList,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;

