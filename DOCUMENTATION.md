# Project Documentation

## Overview

This project is a modern web application built with Vite, React, TypeScript, and styled with shadcn-ui and Tailwind CSS. It serves as a portfolio website to showcase projects, skills, and experience.

## Tech Stack

*   **Vite:** A next-generation frontend tooling that provides a faster and leaner development experience.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **shadcn-ui:** A collection of re-usable components that can be easily customized.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **React Router:** For declarative routing in the application.
*   **Framer Motion:** For animations.
*   **Supabase:** Used for edge functions.

## Project Structure

The project follows a standard structure for a React application:

```
D:\portfolio\
├───.gitignore
├───components.json
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───pnpm-lock.yaml
├───postcss.config.js
├───README.md
├───tailwind.config.ts
├───tsconfig.app.json
├───tsconfig.json
├───tsconfig.node.json
├───vite.config.ts
├───dist\
├───examples\
├───node_modules\
├───public\
├───src\
│   ├───App.css
│   ├───App.tsx
│   ├───index.css
│   ├───main.tsx
│   ├───vite-env.d.ts
│   ├───components\
│   │   ├───AboutSection.tsx
│   │   ├───ContactSection.tsx
│   │   ├───ExperienceSection.tsx
│   │   ├───Footer.tsx
│   │   ├───HeroSection.tsx
│   │   ├───Navigation.tsx
│   │   ├───ProjectsSection.tsx
│   │   ├───SkillsSection.tsx
│   │   ├───theme-provider.tsx
│   │   ├───theme-toggle.tsx
│   │   └───ui\
│   ├───hooks\
│   │   ├───use-mobile.tsx
│   │   └───use-toast.ts
│   ├───lib\
│   │   ├───react-router-dom-proxy.tsx
│   │   └───utils.ts
│   └───pages\
│       ├───Index.tsx
│       └───NotFound.tsx
└───supabase\
    └───edge_function\
```

### Key Directories

*   **`src/components`**: Contains all the reusable React components.
    *   **`src/components/ui`**: Contains the base UI components from shadcn-ui.
*   **`src/pages`**: Contains the main pages of the application.
*   **`src/hooks`**: Contains custom React hooks.
*   **`src/lib`**: Contains utility functions and libraries.
*   **`public`**: Contains static assets like images and icons.
*   **`supabase`**: Contains Supabase edge functions.

## Components

### Main Components

*   **`AboutSection.tsx`**: A section that displays information about the user.
*   **`ContactSection.tsx`**: A section with a contact form.
*   **`ExperienceSection.tsx`**: A section to showcase work experience.
*   **`Footer.tsx`**: The footer of the website.
*   **`HeroSection.tsx`**: The main hero section of the portfolio.
*   **`Navigation.tsx`**: The navigation bar.
*   **`ProjectsSection.tsx`**: A section to display projects.
*   **`SkillsSection.tsx`**: A section to list skills.
*   **`theme-provider.tsx`**: A component to provide the theme to the application.
*   **`theme-toggle.tsx`**: A button to toggle between light and dark themes.

### UI Components

The `src/components/ui` directory contains a wide range of UI components from shadcn-ui, such as `Button`, `Card`, `Input`, `Dialog`, etc. These are base components that are used to build the main components.

## Pages

*   **`Index.tsx`**: The main entry page of the application, which composes all the different sections.
*   **`NotFound.tsx`**: A page that is displayed when a route is not found.

## Hooks

*   **`use-mobile.tsx`**: A hook to detect if the user is on a mobile device.
*   **`use-toast.ts`**: A hook for displaying toast notifications.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

## Edge Functions

The `supabase/edge_function` directory contains a Deno-based edge function. To test the edge functions, run:

```bash
npm run test:edge-functions
```
