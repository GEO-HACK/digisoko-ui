# 🛍️ Digisoko

Digisoko is a modern e-commerce web application designed to connect vendors and buyers in a seamless digital marketplace experience. It emphasizes simplicity, performance, and accessibility — enabling users to browse, shop, and manage carts effortlessly.

---



[![Deploy - Azure Static Web Apps](https://img.shields.io/badge/deploy-azure-blue.svg)](#) <!-- Replace with real badge -->

Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quickstart](#quickstart)
  - [Prerequisites](#prerequisites)
  - [Clone & Install](#clone--install)
  - [Environment](#environment)
  - [Run Locally](#run-locally)
  - [Build & Preview](#build--preview)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Testing & Quality](#testing--quality)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)
- [License & Contact](#license--contact)

## Features

- 🔐 User Authentication
  - Email & password authentication using Firebase Auth
  - Auth context for session management
  - Secure sign-out
- 🛒 Shopping Cart
  - Real-time cart updates (Firebase)
  - Cart persistence across refreshes
  - Checkout confirmation flow
- 🧭 Product Browsing
  - Category filtering, pagination, and product details
  - Related products suggestions
- 🧑‍💼 User Profiles
  - Buyer and vendor profile pages, editable details
- 🌐 Deployment
  - Intended for Azure Static Web Apps with Firebase backend

## Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | Frontend app |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| Firebase | Auth + Realtime / Firestore DB |
| Azure Static Web Apps | Hosting & deployment |
| Lucide Icons / shadcn/ui | Icons & UI components |

## Quickstart

### Prerequisites
- Node.js (LTS recommended)
- npm or pnpm
- A Firebase project (Auth + Firestore or Realtime DB)
- (Optional) Azure Static Web Apps account for deployment

### Clone & Install
```bash
# clone the repository
git clone https://github.com/GEO-HACK/digisoko-ui.git
cd digisoko-ui

# install dependencies
npm install
# or
# pnpm install
```

### Environment
Create a `.env` file in the project root (do NOT commit secrets). Example variables used by the app:

```env
# Firebase configuration (Vite + import.meta.env usage)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Optional (example)
# VITE_API_BASE_URL=https://api.example.com
```

Notes:
- Use the Firebase Console to obtain these values.
- For local emulation of Firebase services, consider the Firebase Emulator Suite for development.

### Run Locally
```bash
# start the dev server
npm run dev
# visit http://localhost:5173
```

### Build & Preview
```bash
# build for production
npm run build

# preview production build locally
npm run preview
```

Commands above assume scripts exist in package.json; adjust if your project uses different script names.

## Project Structure
A recommended high-level layout:

```
src/
├── assets/         # images and static assets
├── components/     # reusable UI components
├── hooks/          # custom React hooks
├── pages/          # route-backed pages
├── providers/      # context providers (auth, theme, etc.)
├── services/       # Firebase wrappers, API clients
└── utils/          # helper utilities
```

Adjust structure to match the repository as needed.

## Deployment

- Azure Static Web Apps: configure the app to build with Vite (set the build output to `dist/` or `build/` depending on config).
- Ensure environment variables (Firebase config) are set in the Azure Static Web Apps deployment settings.
- For production Firebase, set up proper security rules (Firestore/Realtime DB & Storage) and enable necessary Firebase APIs.

## Testing & Quality

- Add unit tests and integration tests where appropriate (Jest / Vitest).
- Add linting and formatting:
  - Prettier for formatting
  - ESLint for linting
- Add a CI workflow (GitHub Actions) to run tests and linters on pull requests.

Example scripts to add in package.json (if not present):
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext .js,.ts,.jsx,.tsx",
    "format": "prettier --write .",
    "test": "vitest"
  }
}
```

## Contributing

Contributions are welcome!

- Fork the repository and create a feature branch.
- Open a PR against the `main` or the project's default branch.
- Follow the project's coding style and include tests when adding functionality.
- Document any configuration changes in this README.

Consider adding:
- a CONTRIBUTING.md with detailed contribution guidelines
- a CODE_OF_CONDUCT.md

## Future Improvements

- Integrate AI-based product recommendations
- Add third-party payment gateway integration
- Vendor analytics dashboard
- Advanced filtering & search using vector embeddings
- Add automated tests and CI/CD

##Contact



Maintainer: GEO-HACK
Project repo: https://github.com/GEO-HACK/digisoko-ui

---
