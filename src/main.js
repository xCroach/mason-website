import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import './index.css';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';  // PrimeIcons
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
})
app.mount('#app')
