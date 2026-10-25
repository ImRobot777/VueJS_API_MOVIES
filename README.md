# SensPasCritique (Movie Discovery & Social Reviews Web App)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Pinia](https://img.shields.io/badge/Pinia-State%20Management-FFE566?style=flat&logo=pinia&logoColor=black)](https://pinia.vuejs.org/)
[![Vue Router](https://img.shields.io/badge/Vue%20Router-SPA%20Navigation-42B883?style=flat&logo=vuedotjs&logoColor=white)](https://router.vuejs.org/)
[![Axios](https://img.shields.io/badge/Axios-REST%20Client-5A29E4?style=flat&logo=axios&logoColor=white)](https://axios-http.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Symfony API Platform](https://img.shields.io/badge/Backend-Symfony%20%2F%20API%20Platform-000000?style=flat&logo=symfony&logoColor=white)](https://api-platform.com/)

A modern, responsive Single Page Application (SPA) built with **Vue.js 3**, **Vite**, **Pinia**, and **Vue Router**, consuming a headless **Symfony / API Platform** REST backend.

Inspired by collaborative entertainment and media platforms like SensCritique, this project allows cinema enthusiasts to discover films, write reviews, manage personal watchlists, and follow other cinephiles.

---

## Key Features

- **Movie Exploration & Discovery**:
  - Paginated movie catalog with customizable page size.
  - Live search by movie title.
  - Advanced filters by genre, cast member, and film director.
- **Detailed Movie Pages**:
  - Comprehensive metadata: synopsis, release details, casting, and poster imagery.
  - Aggregated community ratings and verified user reviews.
  - Direct integration with user watchlists and recommendation entries.
- **User Authentication & Social Network**:
  - Secure JWT authentication (`/api/auth`) and user registration.
  - Personal profile management with edit and delete capabilities.
  - Social graph with follow/unfollow functionality for other users.
  - Personalized timeline activity feed for followed users.
- **User Ratings, Reviews & Collections**:
  - Score movies on a 10-point scale with instant updates.
  - Publish, edit, and delete detailed film reviews.
  - Create and curate custom watchlists and themed movie collections.

---

## Technical Stack & Architecture

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Build Tool**: [Vite](https://vite.dev/) with hot module replacement (HMR)
- **State Management**: [Pinia](https://pinia.vuejs.org/) for centralized authentication and reactive user state
- **Routing**: [Vue Router](https://router.vuejs.org/) with dynamic parameter routing and navigation guards
- **HTTP Client**: [Axios](https://axios-http.com/) configured with standard JSON headers to consume the Symfony / API Platform backend
- **Backend API**: Headless Symfony / API Platform REST API (JWT bearer tokens, JSON-LD / JSON serialization)

---

## Project Structure

```text
src/
├── components/
│   ├── Breadcrumb.vue     # Dynamic breadcrumb navigation
│   ├── MovieCard.vue      # Reusable movie preview card with poster and rating
│   ├── Navbar.vue          # Global responsive navigation header with auth state
│   ├── Pagination.vue      # Configurable page navigation component
│   └── TheFooter.vue       # Application footer
├── views/
│   ├── HomeView.vue        # Landing view with featured movies and discovery shortcuts
│   ├── MoviesList.vue      # Filterable and searchable paginated movie catalog
│   └── MovieDetail.vue     # Detailed view with synopsis, cast, ratings & reviews
├── services/
│   └── api.js              # Centralized Axios instance with environment-based baseURL
├── stores/                 # Pinia stores managing auth tokens and user sessions
├── router/                 # Vue Router routes and route meta definitions
├── App.vue                 # Root application wrapper
└── main.js                 # Application bootstrap (Pinia, Router, Vue mount)
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v22.18.0` or `>=24.12.0`
- **npm**: `v10.0.0` or higher
- Running instance of the Symfony / API Platform backend (or mock REST server)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ImRobot777/VueJS_API_MOVIES.git
cd VueJS_API_MOVIES

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env or .env.local file:
echo "VITE_API_URL=http://localhost:8000/api" > .env.local
```

### Running Locally

```bash
# Start development server with HMR at http://localhost:5173
npm run dev
```

### Production Build

```bash
# Build optimized assets for production in dist/
npm run build

# Preview production build locally
npm run preview
```

---

## API Integration Overview

The application communicates with a Symfony / API Platform backend through a dedicated Axios service layer (`src/services/api.js`) requesting standard JSON payloads (`Accept: application/json`):

| Endpoint | Method | Description |
|---|---|---|
| `/movies?page=1&itemsPerPage=12` | `GET` | Paginated movie listing |
| `/movies?title={query}` | `GET` | Live search movies by title |
| `/movies/{id}` | `GET` | Detailed movie record |
| `/movies/{id}/reviews` | `GET` | Reviews associated with a movie |
| `/auth` | `POST` | Authenticate user credentials and return JWT token |
| `/users` | `POST` | Register a new user |
| `/ratings` | `POST` / `PATCH` | Submit or update a user rating (1-10) |
| `/reviews` | `POST` / `PATCH` | Create or update a movie review |
| `/custom_lists` | `POST` / `PATCH` | Create or update custom collections / watchlists |
| `/users/{id}/follow/{targetId}` | `POST` / `DELETE`| Follow or unfollow another user |
| `/feed` | `GET` | Activity feed of followed cinephiles |

---

## Author

- **Guillaume Guitarian**
  - Application Developer & AI Engineer
  - LinkedIn: [linkedin.com/in/guillaume-guitarian](https://www.linkedin.com/in/guillaume-guitarian)
  - GitHub: [@ImRobot777](https://github.com/ImRobot777)
