import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue'
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
            component: JobsView
        },
        {
            path: '/job/:id',
            name: 'single-job',
            component: JobView
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})


export default router;