import {defineStore} from 'pinia'
import api from '@/services/api'
import {ref} from 'vue'

export const useMoviesStore = defineStore('movies', () => {

    // 1. Explicit reactive state
    const movies = ref([]) //must be an array of Objects
    const currentMovie = ref(null)//must be a single Object
    const currentPage = ref(1)
    const loading = ref(false) // Loading state : true while the network request is pending
    const error = ref(null) // Error state : stores error message if request fails

    // 2. Actions are just regular functions
    async function fetchMovies(page = 1, itemsPerPage = 12) {
        currentPage.value = page
        loading.value = true
        try {
            // Demande les 12 premiers films de la page 1
            const response = await api.get(`/movies?page=${page}&itemsPerPage=${itemsPerPage}`)
            if (response.data == undefined || response.data.length <= 0) {
                error.value = "Movies loading failed: Code 0"
            } else {
                movies.value = response.data
            }
        } catch (err) {
            error.value = 'Movies loading failed : ' + err.message
        } finally {
            loading.value = false
        }
    }

    async function fetchMovieById(id) {
        loading.value = true
        try {
            const response = await api.get(`/movies/${id}`)
            if (!response.data) {
                error.value = "Failed to load movie details: Code 0"
            } else {
                currentMovie.value = response.data
            }
        } catch (err) {
            error.value = 'Failed to load movie details: ' + err.message
        } finally {
            loading.value = false
        }
    }

    function clearCurrentMovie(){
        currentMovie.value = null
    }

    // 3. Expose what the components can use
    return { movies, currentMovie, currentPage, loading, error, fetchMovies, fetchMovieById, clearCurrentMovie}
})