# PWA_Frontend

This project is the main development for the **Advanced Web Programming** course (Programación Web Avanzada) at Universidad Nacional del Comahue. It is a modern web application built with React, focused on delivering a seamless user experience and optimized performance.

The frontend connects to a custom REST API backend built with Node.js, Express, Prisma ORM and PostgreSQL. It supports user authentication via JWT, persistent favorites per user, and full catalog browsing.

## 🚀 Main Technologies

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Navigation:** [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)

## 🛠️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)

## 📦 Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FacuLedesmaBertalot/PWA_Frontend
   cd PWA_Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root of the project:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
   For production, replace the value with the deployed backend URL.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📂 Critical Configuration Structure

To ensure that styles and navigation work correctly, the project relies on the following setup:

- **Tailwind CSS:** Configured via `@tailwindcss/vite` inside the `vite.config.js` file to support version 4 features.
- **Global Styles:** The `@import "tailwindcss";` directive is located in `src/index.css`.
- **Routing:** Centralized navigation management using React Router.

## 🗺️ Application Routes

| Path | Component | Access |
|------|-----------|--------|
| `/` | `Home` | Public |
| `/registro` | `Signup` | Public |
| `/login` | `Login` | Public |
| `/items/:id` | `Details` | Public |
| `/favoritos` | `Favorites` | Requires authentication |
| `*` | `ProductNotFound` | Public |

## 🔐 Authentication

The application implements a JWT-based authentication system integrated with the backend API.

**How it works:**

- The user registers at `/registro` or logs in at `/login`.
- On successful login, the backend returns a JWT token.
- The token is stored in `localStorage` and sent in the `Authorization` header on every protected request.
- The `AuthContext` manages the authenticated user state globally across the application.
- On logout, the token is removed from `localStorage` and the user state is cleared.

**AuthContext** exposes:
- Current authenticated user data.
- Login and logout actions.
- Authentication state to conditionally render UI elements.

**Security rules enforced on the frontend:**
- Unauthenticated users cannot add or remove favorites.
- The JWT token is never exposed in the UI.
- The password is never stored or logged on the client side.

## ⭐ Favorites

Favorites are persisted in the database and associated with the authenticated user. They are not stored in `localStorage`.

**How it works:**

- The `FavoritesContext` manages the favorites state globally.
- On login, the frontend fetches the user's favorites from the backend (`GET /favorites`).
- Adding a favorite sends a `POST /favorites/:id` request with the JWT token in the header.
- Removing a favorite sends a `DELETE /favorites/:id` request with the JWT token in the header.
- On logout, the favorites state is cleared from memory.

**FavoritesContext** exposes:
- The current list of favorites for the authenticated user.
- Actions to add and remove favorites.
- Loading and error states.

## 🌐 API Integration

All communication with the backend is done via `fetch`. The base URL is configured through the `VITE_API_URL` environment variable.

Protected requests include the JWT token in the `Authorization` header:

```javascript
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
}
```

**Backend repository:** [PWA_Backend](<LINK_BACKEND>)  
**Backend deploy:** [API en producción](<LINK_DEPLOY_BACKEND>)

## 🧪 Testing

This project includes automated testing configured with modern tools used in professional frontend development.

**Installed Testing Libraries:**

- **Vitest:** A blazing fast unit test framework powered by Vite.
- **React Testing Library:** For testing React components by simulating real user behavior.
- **jest-dom:** Provides custom DOM element matchers for assertions.
- **user-event:** For simulating realistic user interactions (clicks, typing, etc.).
- **jsdom:** A Node.js environment that simulates a web browser for testing purposes.

**How to run the tests:**

To run the tests in "watch" mode (automatically re-runs when you save files):
```bash
npm run test
```

To run the tests a single time (useful for CI environments or final checks):
```bash
npm run test:run
```

## 💻 Git Workflow

To maintain an organized team development process, we follow this branch schema:

- `main`: Stable code, ready for production.
- `branch_name`: Integration branch for new features.

> **Note:** Before pushing changes to the `branch_name` or `main` branches, ensure you run `git pull` to prevent merge conflicts.

## 👥 Participantes

- <img src="https://github.com/FacuLedesmaBertalot.png" width="50"> | **Facundo** | [@FacuLedesmaBertalot](https://github.com/FacuLedesmaBertalot) | Project Manager |
- <img src="https://github.com/Alejo4758.png" width="50"> | **Alejo** | [@Alejo4758](https://github.com/Alejo4758) | Developer 1 |
- <img src="https://github.com/Ibenjamindlf.png" width="50"> | **Benjamin** | [@Ibenjamindlf](https://github.com/Ibenjamindlf) | Developer 2 |

---

© 2026 - Facultad de Informática, Universidad Nacional del Comahue.
