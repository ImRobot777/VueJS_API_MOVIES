import {createRouter, createWebHistory} from 'vue-router'
import MoviesList from '@/views/MoviesList.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-view',
            component: HomeView,
        },
        {
            path: '/movies',
            name: 'movies-list',
            component: MoviesList,
        },
        {
            path: '/movies/:id',
            name: 'movie-detail',
            component: MovieDetail,
        },
    ],
})

export default router
