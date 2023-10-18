# Astro TEMPLATE

Heavily inspired by: https://github.com/matt765/Tailcast

> ### [LIVE DEMO](https://cru-template-tailcast.netlify.app/)
> [![Netlify Status](https://api.netlify.com/api/v1/badges/2c5fd39c-9c77-45cd-b2cc-b72197ff00a1/deploy-status)](https://app.netlify.com/sites/cru-template-tailcast/deploys)

## Features
This template features examples of using React within Astro. This is a powerful tool built into Astro letting you render reactive components on the client

Rather than using React for the entire application which is super wasteful for static sites, you can use React only for the components that need reactivity while the rest of the site remains static and performant.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ... images
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Faq.jsx
│   │   └── Footer.jsx
│   │   └── Hero.jsx
│   │   └── Pricing.jsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn start`              | Starts local dev server at `localhost:4321`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`    | Get help using the Astro CLI                     |

