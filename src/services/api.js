import axios from 'axios'

// Create a configured Axios instance pointing to the backend API
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        // Ask Symfony to directly send back standard JSON instead of JSON-LD Hydra (JSON-LD is not javascript)
        'Accept': 'application/json',
    },
})

export default api