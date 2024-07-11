import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import JobView from '@/views/JobsView.vue';
import NotFound from '@/views/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'job',
            component: JobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})


export default router;