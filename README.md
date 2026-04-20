# PWA_Frontend

This project is the main development for the **Advanced Web Programming** course (Programación Web Avanzada) at Universidad Nacional del Comahue. It is a modern web application built with React, focused on delivering a seamless user experience and optimized performance.

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

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📂 Critical Configuration Structure

To ensure that styles and navigation work correctly, the project relies on the following setup:

- **Tailwind CSS:** Configured via `@tailwindcss/vite` inside the `vite.config.js` file to support version 4 features.
- **Global Styles:** The `@import "tailwindcss";` directive is located in `src/index.css`.
- **Routing:** Centralized navigation management using React Router.

## 💻 Git Workflow

To maintain an organized team development process, we follow this branch schema:

- `main`: Stable code, ready for production.
- `branch_name`: Integration branch for new features.
> **Note:** Before pushing changes to the `branch_name` or `main` branches, ensure you run `git pull` to prevent merge conflicts.

---
© 2026 - Facultad de Informática, Universidad Nacional del Comahue.
---
