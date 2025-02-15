import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/components/about', component: About },
    { path: '/components/projects', component: Projects }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;