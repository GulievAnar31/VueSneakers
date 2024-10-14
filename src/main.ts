import { createApp } from 'vue'
import './assets/main.css'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './components/Router/Router'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
