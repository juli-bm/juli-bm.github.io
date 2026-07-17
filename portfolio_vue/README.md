# Portfolio (Vue.js)

Vue 3 + Vite rewrite of the portfolio, matching the visual identity of the main
site (colors, fonts, dark mode) with a component-based structure.

## Setup

Requires [Node.js](https://nodejs.org/) (18+) and npm — neither is installed in
this environment, so dependencies haven't been installed yet.

```bash
cd portfolio_vue
npm install
npm run dev       # local dev server with hot reload
npm run build      # outputs static site to dist/
npm run preview    # preview the production build locally
```

## Structure

```
portfolio_vue/
├── public/            # static assets served as-is (favicon, images, CV pdf)
├── src/
│   ├── components/    # NavBar, Hero, Projects, ProjectCard, ProjectModal, About, AppFooter
│   ├── data/           # projects.js — project content
│   ├── App.vue         # root component, theme state
│   ├── main.js
│   └── style.css       # global styles (CSS variables, dark mode)
├── index.html
└── vite.config.js
```

## Deploying

`npm run build` produces a static `dist/` folder (relative asset paths, so it
works whether served from the domain root or a subpath like
`https://juli-bm.github.io/portfolio_vue/`). Deploy its contents the same way
as the other site folders in this repo.
