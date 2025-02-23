import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './index.css';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';  // PrimeIcons

const app = createApp(App);
app.use(router);
app.use(PrimeVue)
app.mount('#app')
