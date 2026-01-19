# Course Design Frameworks

A modern, interactive toolkit for online course development. This web application digitizes frameworks by Dominik Lukeš, offering faculty and instructional designers a suite of tools—including checklists, engagement matrices, and activity planners—to evaluate and enhance their online course designs.

## Architecture

This project is architected as a lightweight, client-side Single Page Application (SPA) using React 19 and TypeScript. It leverages modern browser capabilities (ES Modules) to minimize build tooling overhead while maintaining a robust development experience.

### Tech Stack
*   **Core**: React 19 (via ES Modules)
*   **Styling**: Tailwind CSS (via CDN)
*   **Icons**: Lucide React
*   **Language**: TypeScript

### Directory Structure
*   `App.tsx`: The main application container handling routing and layout state.
*   `data.ts`: The content repository. All text, matrices, and checklists are stored here as structured JSON, decoupling content from presentation.
*   `types.ts`: TypeScript interfaces defining the shape of the content data (`Section`, `ContentBlock`, `MatrixData`, etc.).
*   `components/`:
    *   `SectionView.tsx`: The core content renderer. It uses a polymorphic approach to render different section types (`text`, `checklist`, `matrix`, `planner`) based on the data provided.
    *   `Dashboard.tsx`: The landing page grid view.
    *   `Navigation.tsx`: The responsive sidebar navigation.

### Key Features
*   **Dynamic Rendering**: The `SectionView` component acts as a factory, rendering appropriate sub-components (`TextRenderer`, `ChecklistRenderer`, `MatrixRenderer`) based on the section type defined in `data.ts`.
*   **Interactive Elements**: Checklists track progress locally, and Planners utilize `contentEditable` allowing users to draft plans directly in the browser.
*   **Responsive Design**: A mobile-first approach using Tailwind CSS ensures the app is usable on all devices, with a collapsible sidebar implementation.

## Deployment

This application is designed to be deployed as a static site.

### Requirements
*   A static web host (e.g., Vercel, Netlify, GitHub Pages, Firebase Hosting, or AWS S3).
*   **Note**: In this specific configuration, the app relies on browser-native ES module imports via `importmap` defined in `index.html`.

### Local Development
To run this project locally:

1.  **Serve the directory**:
    Because the application uses ES modules, it cannot be run directly via the file protocol (`file://`). You must use a local web server.
    
    Using Node.js:
    ```bash
    npx serve
    ```
    
    Using Python:
    ```bash
    python3 -m http.server 8000
    ```

2.  **Access the App**:
    Open your browser to `http://localhost:8000` (or the port specified by your server).

### Dependencies
The application loads dependencies from CDNs (`aistudiocdn.com` and `tailwindcss.com`) as defined in `index.html`. Ensure your deployment environment allows outbound requests to these domains.
