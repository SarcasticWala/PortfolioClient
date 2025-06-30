# Portfolio69

A modern, responsive portfolio web application built with React, TypeScript, Vite, and Tailwind CSS. This project showcases your best work, skills, and contact information in a visually appealing and performant way.

## Cloning the Repository

To get a local copy of this project, run:

```bash
git clone https://github.com/SarcasticWala/PortfolioClient.git
cd portfolio69
```



## Features
- **React + TypeScript**: Strongly-typed, component-based architecture for maintainability.
- **Vite**: Fast development server and optimized production builds.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Modular Components**: Reusable UI components for easy customization.
- **Responsive Design**: Mobile-friendly and accessible across devices.
- **Vercel Ready**: Includes configuration for seamless deployment on Vercel.

## Project Structure
```
components.json
public/
src/
  components/
  controllers/
  hooks/
  lib/
  models/
  pages/
...
```
- `src/components/`: UI components (HeroSection, Footer, etc.)
- `src/pages/`: Main pages (Home, About, Portfolio, Contact, etc.)
- `src/controllers/`, `src/models/`, `src/hooks/`, `src/lib/`: Logic, data models, utilities

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Linting
```bash
npm run lint
```

## Deployment
This project is ready to deploy on [Vercel](https://vercel.com/). The `vercel.json` file is configured for SPA routing.

## Customization
- Update content in `src/pages/` and `src/components/` to personalize your portfolio.
- Modify styles using Tailwind utility classes in your components.

## License
MIT

