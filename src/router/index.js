import {createRouter, createWebHistory} from 'vue-router'
import MoviesList from '@/views/MoviesList.vue'
import MovieDetail from '@/views/MovieDetail.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
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
