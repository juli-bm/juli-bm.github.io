# Portfolio DSFR (Vue.js)

Vue 3 + Vite rewrite of the DSFR-styled portfolio (`portfolio_dsfr/`), using the
vendored official [DSFR](https://www.systeme-de-design.gouv.fr/) CSS framework
for visuals, with all interactivity (project modal, mobile nav, theme
light/dark/system switcher) reimplemented as reactive Vue state instead of the
vanilla `dsfr.module.min.js` controller — which expects to scan static DOM on
load and doesn't play well with Vue's own render cycle.

DSFR's own CSS toggles modal visibility purely via a `.fr-modal--opened`
class and dark mode via a `data-fr-theme="dark"` attribute on `<html>`, so
both are driven directly with `:class` / `watchEffect` bindings — no need for
DSFR's JS at all.

## Setup

Requires [Node.js](https://nodejs.org/) (18+) and npm.

```bash
cd portfolio_dsfr_vue
npm install
npm run dev       # local dev server with hot reload
npm run build      # outputs static site to dist/
npm run preview    # preview the production build locally
```

## Structure

```
portfolio_dsfr_vue/
├── public/
│   ├── css/            # vendored dsfr.css + icons.min.css + icon SVGs
│   ├── images/          # project screenshots, logo
│   └── pdf/              # CV
├── src/
│   ├── components/
│   │   ├── AppHeader.vue   # fr-header, burger menu, translate, theme trigger
│   │   ├── ThemeModal.vue  # light/dark/system radio modal
│   │   ├── Hero.vue
│   │   ├── Projects.vue    # grid + modal state
│   │   ├── ProjectCard.vue
│   │   ├── ProjectModal.vue
│   │   ├── About.vue
│   │   └── AppFooter.vue
│   ├── data/projects.js
│   ├── App.vue              # theme state (light/dark/system), mobile nav state
│   ├── main.js
│   └── style.css            # layout overrides on top of dsfr.css
├── index.html
└── vite.config.js
```

## Deploying

`npm run build` produces a static `dist/` folder (relative asset paths), same
deployment pattern as the other site folders in this repo.
