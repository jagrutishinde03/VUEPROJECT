import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import View from './views/View.vue';
import Profile from './views/Profile.vue';

const routes=[
    {path: '/',name: 'Home', component: Home},
    {path: '/view/:id',name: 'View', component: View},
    {path: '/profile',name: 'Profile', component: Profile},
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;