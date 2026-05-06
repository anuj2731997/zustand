# Zustand Demo

A React + Vite demo project using Zustand for state management.

## What you will find here

- Global counter state using Zustand.
- Theme management with live preview and toggle.
- Simple authentication flow with login/logout state.
- Component-driven state updates via Zustand stores.

## Features

- `Counter` component that reads and updates shared counter state.
- `ThemePreview`, `ThemeToggleButton`, and `UserProfile` components show theme state.
- `Navbar`, `LoginPage`, and `Dashboard` components demonstrate auth state transitions.
- Zustand stores in `src/store` for `counter`, `theme`, and `login` management.

## Installation

```bash
cd zustand
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## Project structure

- `src/App.jsx` — main demo page wiring all app sections.
- `src/components/Counter.jsx` — counter UI using Zustand store.
- `src/components/ThemePreview.jsx` — displays current theme state.
- `src/components/UserProfile.jsx` — user profile details.
- `src/components/ThemeToggleButton.jsx` — theme toggle button.
- `src/components/Dashboard.jsx` — authenticated dashboard view.
- `src/components/Navbar.jsx` — login/logout navbar.
- `src/components/LoginPage.jsx` — login page.
- `src/store/counterStore.js` — Zustand counter store.
- `src/store/themeManager.js` — theme state manager store.
- `src/store/loginStore.js` — login/auth state store.

## Notes

This project is built for learning Zustand state management patterns. Feel free to extend the stores and components to try more shared state scenarios.
